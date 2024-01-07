import { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import HashLoader from "react-spinners/HashLoader";
import Filter from "bad-words";
import PasswordValidator from "password-validator";
import validator from "validator";

import { setCredentials } from "../slices/authSlice";
import { useRegisterMutation, useLoginMutation } from "../slices/authApiSlice";

import usePersist from "../../../hooks/usePersist";
import useAuth from "../../../hooks/useAuth";

import ErrorInfo from "../../global/components/ErrorInfo";
import { RegisterForm } from "./RegisterForm";
import { StyledAuth } from "../styles/Login.styled";

export default function Register() {
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
    name: false,
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
        return inputs.password === value;
    }
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
      /^(?!.*_{2,})(?=.{1,20}$)[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*_?[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9]$/;

    const isValid = regex.test(username);
    return isValid;
  };

  const validatePassword = (password) => {
    const schema = new passwordValidator();

    schema
      .is()
      .min(8) // min. 8 chars
      .has()
      .uppercase() // min. 1 uppercase letter
      .has()
      .lowercase() // min. 1 lowercase letter
      .has()
      .digits() // min. 1 digit
      .has()
      .not()
      .spaces() // no spaces
      .has()
      .symbols(); // min. 1 special character

    const isValid = schema.validate(password);
    return isValid;
  };

  const validateEmail = (email) => {
    const isValid = validator.isEmail(email);
    return isValid;
  };

  const validateName = (firstName, lastName) => {
    const regex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;

    const isValid = regex.test(firstName) && regex.test(lastName);
    return isValid;
  };

  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

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
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 409) {
        setErrMsg("Username is taken");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  };

  const isAllDataValid = Object.values(validations).every(Boolean);
  const isAllDataExist = Object.values(inputs).every(Boolean);

  if (isLoading && isLoginLoading)
    return <HashLoader color="fff" className="hashLoader" />;

  const content = (
    <StyledAuth>
      {errMsg && <ErrorInfo message={errMsg} />}
      <h2>Sign up</h2>

      <RegisterForm
        handlers={{
          handleInputChange,
          onSignUpClicked,
          onPersistToggle,
        }}
        persist={persist}
        canSave={isAllDataExist && isAllDataValid}
        inputs={inputs}
        usernameRef={usernameRef}
      />

      <div className="flex">
        <p>Already registered? </p>
        <Link to="/login" className="reactRouterLink">
          <p>Sign in</p>
        </Link>
      </div>
    </StyledAuth>
  );

  return content;
}
