import { useState } from "react";

export default function useValidation() {
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

  const setValidationStyle = (isValid, fieldRef) => {
    if (isValid) {
      fieldRef.current.classList.add("correct");
      fieldRef.current.classList.remove("incorrect");
    } else {
      fieldRef.current.classList.add("incorrect");
      fieldRef.current.classList.remove("correct");
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    const isValid = inputs.password === confirmPassword;
    setValidationStyle(isValid, confirmPasswordRef);

    return isValid;
  };

  const validateUsername = (username) => {
    /*
  Requirements:
  - min. 3 chars
  - max. 20 chars
  - only letters (big and small) or numbers or "_"
  - no whitespaces
  - no special characters on the start and end
  - two special characters mustn't be next to each other
  - must contain at least 2 letters
  */
    const regex =
      /^(?!.*_{3,})(?=.{3,20}$)[a-zA-Z0-9]+(_[a-zA-Z0-9]*)*[a-zA-Z0-9]+$/;
    const twoLettersRegex = /.*[a-zA-Z].*[a-zA-Z].*/;

    const isValid = regex.test(username) && twoLettersRegex.test(username);
    setValidationStyle(isValid, usernameRef);

    return isValid;
  };

  const validatePassword = (password) => {
    const getRequirementParagraph = (index) => {
      return passwordRequirementsRef.current.querySelector(
        `p:nth-of-type(${index})`
      );
    };

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
    setValidationStyle(isValid, passwordRef);

    return isValid;
  };

  const validateEmail = (email) => {
    const isValid = validator.isEmail(email);
    setValidationStyle(isValid, emailRef);

    return isValid;
  };

  const validateFirstName = (firstName) => {
    const regex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;

    const isValid = regex.test(firstName);
    setValidationStyle(isValid, firstNameRef);

    return isValid;
  };

  const validateLastName = (lastName) => {
    const regex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;

    const isValid = regex.test(lastName);
    setValidationStyle(isValid, lastNameRef);

    return isValid;
  };

  return { validations, setValidations, validateField };
}
