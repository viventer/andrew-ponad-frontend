import { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";

import HashLoader from "react-spinners/HashLoader";
import Filter from "bad-words";
import passwordValidator from "password-validator";
import validator from "validator";

import { setCredentials } from "../slices/authSlice";
import { useRegisterMutation, useLoginMutation } from "../slices/authApiSlice";

import usePersist from "../../../hooks/usePersist";
import useAuth from "../../../hooks/useAuth";

import ErrorInfo from "../../global/components/ErrorInfo";
import { RegisterForm } from "./RegisterForm";
import { StyledAuth } from "../styles/Login.styled";

export default function Register() {
  const theme = useTheme();

  const { setIsLogged, isLogged } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isLogged) {
      navigate(from, { replace: true });
    }
  }, []);

  const [register, { isLoading, isSuccess }] = useRegisterMutation();

  const [persist, setPersist] = usePersist();
  const onPersistToggle = () => setPersist((prev) => !prev);

  const [errMsg, setErrMsg] = useState("");

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const [validations, setValidations] = useState({
    username: false,
    password: false,
    confirmPassword: false,
    email: false,
    firstName: false,
    lastName: false,
  });

  const handleInputChange = (fieldName, value) => {
    setInputs((prevInputs) => ({ ...prevInputs, [fieldName]: value }));
    setValidations((prevValidations) => ({
      ...prevValidations,
      [fieldName]: validateField(fieldName, value),
    }));
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "password":
        return validatePassword(value);
      case "username":
        return validateUsername(value);
      case "firstName":
        return validateName(value, inputs.lastName);
      case "lastName":
        return validateName(inputs.firstName, value);
      case "email":
        return validateEmail(value);
      case "confirmPassword":
        return validateConfirmPassword(value);
    }
  };

  const setValidationStyle = (isValid, fieldRef) => {
    isValid
      ? fieldRef.current.classList.add("correct")
      : fieldRef.current.classList.remove("correct");
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

  const validateName = (firstName, lastName) => {
    const regex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;

    const isValidFirstName = regex.test(firstName);
    setValidationStyle(isValidFirstName, firstNameRef);

    const isValidLastName = regex.test(lastName);
    setValidationStyle(isValidLastName, lastNameRef);

    const isValidName = isValidFirstName && isValidLastName;
    return isValidName;
  };

  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const passwordRequirementsRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  useEffect(() => {
    if (isSuccess) {
      finish();
    }
  }, [isSuccess, navigate]);

  const finish = () => {
    setUsername("");
    setPassword("");
    navigate("/");
  };

  const dispatch = useDispatch();

  const [login, { isLoginLoading }] = useLoginMutation();

  const onSignUpClicked = async (e) => {
    e.preventDefault();
    if (!isAllDataExist) {
      setErrMsg("Uzupełnij wszystkie pola");
      return;
    } else if (!isAllDataValid) {
      setErrMsg("Wprowadzone dane są niepoprawne");
      return;
    }
    try {
      await register({ username, password }).unwrap();
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ username, accessToken }));
      if (!isLogged) {
        setIsLogged(true);
      }
      navigate(from, { replace: true });
    } catch (err) {
      if (!err.originalStatus) {
        setErrMsg("Brak odpowiedzi serwera");
      } else if (err.originalStatus === 400) {
        setErrMsg("Wprowadź wszystkie dane");
      } else if (err.originalStatus === 409) {
        setErrMsg("Nazwa użytkownika jest zajęta");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  };

  const isAllDataValid = Object.values(validations).every(Boolean);
  const isAllDataExist = Object.values(inputs).every(Boolean);

  console.log(validations);

  if (isLoading && isLoginLoading)
    return <HashLoader color="fff" className="hashLoader" />;

  const content = (
    <StyledAuth>
      {errMsg && <ErrorInfo message={errMsg} />}
      <h2>Zarejestruj się</h2>

      <RegisterForm
        handlers={{
          handleInputChange,
          onSignUpClicked,
          onPersistToggle,
        }}
        persist={persist}
        canSave={isAllDataExist && isAllDataValid}
        inputs={inputs}
        references={{
          usernameRef,
          emailRef,
          passwordRef,
          confirmPasswordRef,
          passwordRequirementsRef,
          firstNameRef,
          lastNameRef,
        }}
      />

      <div className="flex">
        <p>Masz już konto? </p>
        <Link to="/login" className="reactRouterLink">
          <p>Zaloguj się</p>
        </Link>
      </div>
    </StyledAuth>
  );

  return content;
}
