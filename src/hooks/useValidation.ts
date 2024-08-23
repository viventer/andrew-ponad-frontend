import React, { useState } from "react";
import { useTheme } from "styled-components";

import validator from "validator";

export type FieldName =
  | "password"
  | "username"
  | "firstName"
  | "lastName"
  | "email"
  | "confirmPassword";

export default function useValidation(
  references: { [key: string]: React.MutableRefObject<HTMLElement> },
  inputs: { [key: string]: string }
) {
  const theme = useTheme();

  const [validations, setValidations] = useState({
    username: false,
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const validateField = (fieldName: FieldName, value: string): boolean => {
    switch (fieldName) {
      case "password":
        return validatePassword(value);
      case "username":
        return validateUsername(value);
      case "firstName":
        return validateFirstName(value);
      case "lastName":
        return validateLastName(value);
      case "email":
        return validateEmail(value);
      case "confirmPassword":
        return validateConfirmPassword(value);
    }
  };

  type ValidationFunction = (input: string) => boolean;

  const validateConfirmPassword: ValidationFunction = (confirmPassword) => {
    const isValid = inputs.password === confirmPassword;
    setValidationStyle(isValid, references.confirmPasswordRef);

    return isValid;
  };

  const validateUsername: ValidationFunction = (username) => {
    const regex =
      /^(?!.*_{3,})(?=.{3,20}$)[a-zA-Z0-9]+(_[a-zA-Z0-9]*)*[a-zA-Z0-9]+$/;
    const twoLettersRegex = /.*[a-zA-Z].*[a-zA-Z].*/;

    const isValid = regex.test(username) && twoLettersRegex.test(username);
    setValidationStyle(isValid, references.usernameRef);

    return isValid;
  };

  const validateEmail: ValidationFunction = (email) => {
    const isValid = validator.isEmail(email);
    setValidationStyle(isValid, references.emailRef);

    return isValid;
  };

  const validatePassword: ValidationFunction = (password): boolean => {
    const checkRequirement = (
      requirementMet: boolean,
      paragraphIndex: number
    ) => {
      const requirementParagraph = getRequirementParagraph(paragraphIndex);
      if (requirementMet && requirementParagraph) {
        requirementParagraph.style.color = theme.colors.green;
        setTimeout(() => {
          requirementParagraph.style.display = "none";
        }, 500);
        requirementParagraph.style.opacity = "0";
      } else if (requirementParagraph) {
        requirementParagraph.style.color = theme.colors.red;
        setTimeout(() => {
          requirementParagraph.style.display = "block";
        }, 500);
        requirementParagraph.style.opacity = "1";
      }
    };

    const getRequirementParagraph = (index: number): HTMLElement => {
      const container = references.passwordRequirementsRef.current!;
      return container.querySelector(`p:nth-of-type(${index})`) as HTMLElement;
    };

    type Requirements = {
      [key: string]: boolean;
    };

    const requirements: Requirements = {
      correctLength: password.length >= 8 && password.length <= 32,
      containsUpperCase: /[A-Z]/.test(password),
      containsLowerCase: /[a-z]/.test(password),
      containsDigit: /[0-9]/.test(password),
      containsSpecialChar: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password),
      notContainSpace: /^[^\s]*$/.test(password),
    };

    let paragraphIndex = 1;
    for (const requirement in requirements) {
      checkRequirement(requirements[requirement], paragraphIndex);
      paragraphIndex++;
    }

    const isValid = Object.values(requirements).every(Boolean);
    setValidationStyle(isValid, references.passwordRef);

    return isValid;
  };

  const validateFirstName: ValidationFunction = (firstName) => {
    const regex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;

    const isValid = regex.test(firstName);
    setValidationStyle(isValid, references.firstNameRef);

    return isValid;
  };

  const validateLastName: ValidationFunction = (lastName) => {
    const regex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;

    const isValid = regex.test(lastName);
    setValidationStyle(isValid, references.lastNameRef);

    return isValid;
  };

  const setValidationStyle = (
    isValid: boolean,
    fieldRef: React.RefObject<HTMLElement>
  ) => {
    const element = fieldRef.current as HTMLElement;

    if (isValid) {
      element.classList.add("correct");
      element.classList.remove("incorrect");
    } else {
      element.classList.add("incorrect");
      element.classList.remove("correct");
    }
  };

  return { validations, setValidations, validateField };
}
