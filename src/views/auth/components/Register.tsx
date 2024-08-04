import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCredentials } from "../slices/authSlice";
import { useRegisterMutation, useLoginMutation } from "../slices/authApiSlice";
import {
  selectIsLogged,
  setIsLoading,
  setIsLogged,
} from "../../global/slices/globalStatesSlice";

import usePersist from "../../../hooks/usePersist";
import useValidation, { FieldName } from "../../../hooks/useValidation";

import DynamicErrorNotification from "../../global/components/DynamicErrorNotification";
import { RegisterForm } from "./RegisterForm";
import { StyledAuth } from "../styles/Auth.styled";

export type RegistrationInputs = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
};

export default function Register() {
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isLogged) {
      navigate(from, { replace: true });
    }
  }, []);

  const emailRef = useRef<HTMLElement>();
  const passwordRef = useRef<HTMLElement>();
  const confirmPasswordRef = useRef<HTMLElement>();
  const passwordRequirementsRef = useRef<HTMLElement>();
  const firstNameRef = useRef<HTMLElement>();
  const lastNameRef = useRef<HTMLElement>();
  const usernameRef = useRef<HTMLElement>();

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const dispatch = useDispatch();
  const [persist, setPersist] = usePersist();
  const onPersistToggle = () => setPersist((prev) => !prev);

  const [register, { isLoading }] = useRegisterMutation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const [errMsg, setErrMsg] = useState("");

  const initialInputsState = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  };

  const [inputs, setInputs] = useState<RegistrationInputs>(initialInputsState);

  const { validations, setValidations, validateField } = useValidation(
    {
      usernameRef: usernameRef as React.MutableRefObject<HTMLElement>,
      emailRef: usernameRef as React.MutableRefObject<HTMLElement>,
      firstNameRef: usernameRef as React.MutableRefObject<HTMLElement>,
      lastNameRef: usernameRef as React.MutableRefObject<HTMLElement>,
      passwordRef: usernameRef as React.MutableRefObject<HTMLElement>,
      confirmPasswordRef: usernameRef as React.MutableRefObject<HTMLElement>,
      passwordRequirementsRef:
        usernameRef as React.MutableRefObject<HTMLElement>,
    },
    inputs
  );

  const handleInputChange = (fieldName: FieldName, value: string) => {
    setInputs((prevInputs) => ({ ...prevInputs, [fieldName]: value }));
    setValidations((prevValidations) => ({
      ...prevValidations,
      [fieldName]: validateField(fieldName, value),
    }));
  };

  const onRegisterClicked = async (e: React.FormEvent<HTMLFormElement>) => {
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
      setInputs(initialInputsState);
      if (!isLogged) {
        dispatch(setIsLogged(true));
      }
      navigate(from, { replace: true });
    } catch (err) {
      handleRegistrationError(err);
    }
  };

  const handleRegistrationError = (err: any) => {
    if (!err.originalStatus && !err.status) {
      setErrMsg("Brak odpowiedzi serwera");
    } else if (err.originalStatus === 400) {
      setErrMsg("Wprowadź wszystkie dane");
    } else if (err.status === 422) {
      setErrMsg("Wprowadzone dane zawierają obraźliwe słowa");
    } else if (err.originalStatus === 409) {
      setErrMsg("Nazwa użytkownika lub email jest zajęty");
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
