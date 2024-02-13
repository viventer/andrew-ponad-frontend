import { useState } from "react";
import { useTheme } from "styled-components";

import validator from "validator";

export default function useValidation(references, inputs) {
  const theme = useTheme();

  const [validations, setValidations] = useState({
    username: false,
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const validateField = (fieldName, value) => {
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

  const validateConfirmPassword = (confirmPassword) => {
    const isValid = inputs.password === confirmPassword;
    setValidationStyle(isValid, references.confirmPasswordRef);

    return isValid;
  };

  const validateUsername = (username) => {
    const regex =
      /^(?!.*_{3,})(?=.{3,20}$)[a-zA-Z0-9]+(_[a-zA-Z0-9]*)*[a-zA-Z0-9]+$/;
    const twoLettersRegex = /.*[a-zA-Z].*[a-zA-Z].*/;

    const isValid = regex.test(username) && twoLettersRegex.test(username);
    setValidationStyle(isValid, references.usernameRef);

    return isValid;
  };

  const validatePassword = (password) => {
    const checkRequirement = (requirement, paragraphIndex) => {
      const requirementParagraph = getRequirementParagraph(paragraphIndex);
      if (requirement) {
        requirementParagraph.style.color = theme.colors.green;
        setTimeout(() => {
          requirementParagraph.style.display = "none";
        }, 500);
        requirementParagraph.style.opacity = "0";
      } else {
        requirementParagraph.style.color = theme.colors.red;
        setTimeout(() => {
          requirementParagraph.style.display = "block";
        }, 500);
        requirementParagraph.style.opacity = "1";
      }
    };

    const getRequirementParagraph = (index) => {
      return references.passwordRequirementsRef.current.querySelector(
        `p:nth-of-type(${index})`
      );
    };

    const requirements = {
      correctLength: password.length >= 8 && password.length <= 32,
      containsUpperCase: /[A-Z]/.test(password),
      containsLowerCase: /[a-z]/.test(password),
      containsDigit: /[1-9]/.test(password),
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

  const validateEmail = (email) => {
    const isValid = validator.isEmail(email);
    setValidationStyle(isValid, references.emailRef);

    return isValid;
  };

  const validateFirstName = (firstName) => {
    const regex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;

    const isValid = regex.test(firstName);
    setValidationStyle(isValid, references.firstNameRef);

    return isValid;
  };

  const validateLastName = (lastName) => {
    const regex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;

    const isValid = regex.test(lastName);
    setValidationStyle(isValid, references.lastNameRef);

    return isValid;
  };

  const setValidationStyle = (isValid, fieldRef) => {
    if (isValid) {
      fieldRef.current.classList.add("correct");
      fieldRef.current.classList.remove("incorrect");
    } else {
      fieldRef.current.classList.add("incorrect");
      fieldRef.current.classList.remove("correct");
    }
  };

  return { validations, setValidations, validateField };
}
