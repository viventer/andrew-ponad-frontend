import { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCredentials } from "../slices/authSlice";
import { useRegisterMutation, useLoginMutation } from "../slices/authApiSlice";
import { setIsLoading } from "../../global/slices/globalStatesSlice";

import usePersist from "../../../hooks/usePersist";
import useAuth from "../../../hooks/useAuth";
import useValidation from "../../../hooks/useValidation";

import DynamicErrorNotification from "../../global/components/DynamicErrorNotification";
import { RegisterForm } from "./RegisterForm";
import { StyledAuth } from "../styles/Auth.styled";

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

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const passwordRequirementsRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const dispatch = useDispatch();
  const [persist, setPersist] = usePersist();
  const onPersistToggle = () => setPersist((prev) => !prev);

  const [register, { isLoading }] = useRegisterMutation();
  const [login, { isLoginLoading }] = useLoginMutation();

  const [errMsg, setErrMsg] = useState("");

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const { validations, setValidations, validateField } = useValidation(
    {
      usernameRef,
      emailRef,
      firstNameRef,
      lastNameRef,
      passwordRef,
      confirmPasswordRef,
      passwordRequirementsRef,
    },
    inputs
  );

  const handleInputChange = (fieldName, value) => {
    setInputs((prevInputs) => ({ ...prevInputs, [fieldName]: value }));
    setValidations((prevValidations) => ({
      ...prevValidations,
      [fieldName]: validateField(fieldName, value),
    }));
  };

  const onRegisterClicked = async (e) => {
    e.preventDefault();
    if (!isAllDataExist) {
      setErrMsg("Uzupełnij wszystkie pola");
      return;
    } else if (!isAllDataValid) {
      setErrMsg("Wprowadzone dane są niepoprawne");
      return;
    }
    try {
      await register(inputs).unwrap();
      const { accessToken, userId } = await login({
        password: inputs.password,
        username: inputs.username,
      }).unwrap();
      dispatch(
        setCredentials({ username: inputs.username, accessToken, userId })
      );
      setInputs({});
      if (!isLogged) {
        setIsLogged(true);
      }
      navigate(from, { replace: true });
    } catch (err) {
      handleRegistrationError(err);
    }
  };

  const handleRegistrationError = (err) => {
    if (!err.originalStatus && !err.status) {
      setErrMsg("Brak odpowiedzi serwera");
    } else if (err.originalStatus === 400) {
      setErrMsg("Wprowadź wszystkie dane");
    } else if (err.status === 422) {
      setErrMsg("Wprowadzone dane zawierają obraźliwe słowa");
    } else if (err.originalStatus === 409) {
      setErrMsg("Nazwa użytkownika jest zajęta");
    } else {
      setErrMsg(err.data?.message);
    }
  };

  const isAllDataValid = Object.values(validations).every(Boolean);
  const isAllDataExist = Object.values(inputs).every(Boolean);

  useEffect(() => {
    if (isLoading || isLoginLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading, isLoginLoading]);

  const content = (
    <StyledAuth className="register">
      <h2>Zarejestruj się</h2>

      <RegisterForm
        handlers={{
          handleInputChange,
          onRegisterClicked,
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

      {errMsg && (
        <DynamicErrorNotification message={errMsg} aria-live="assertive" />
      )}
    </StyledAuth>
  );

  return content;
}
