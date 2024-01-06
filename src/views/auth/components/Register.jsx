import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch } from "react-redux";

import { setCredentials } from "../slices/authSlice";
import { useRegisterMutation, useLoginMutation } from "../slices/authApiSlice";

import usePersist from "../../../hooks/usePersist";
import useAuth from "../../../hooks/useAuth";

import ErrorInfo from "../../global/components/ErrorInfo";
import { RegisterForm } from "./RegisterForm";
import { StyledAuth } from "../styles/Login.styled";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

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

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
    setValidPassword(PWD_REGEX.test(password));
    setValidConfirmPassword(password === confirmPassword && password);
    setErrMsg("");
  }, [username, password, confirmPassword]);

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

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onConfirmPasswordChanged = (e) => setConfirmPassword(e.target.value);
  const onPersistToggle = () => setPersist((prev) => !prev);

  const dispatch = useDispatch();

  const [login, { isLoginLoading }] = useLoginMutation();

  const onSignUpClicked = async (e) => {
    e.preventDefault();
    if (!canSave) {
      setErrMsg("Enter all the data");
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

  const canSave =
    [validUsername, validPassword, validConfirmPassword].every(Boolean) &&
    !isLoading;

  if (isLoading && isLoginLoading) return <HashLoader color="fff" />;

  const content = (
    <StyledAuth>
      {errMsg && <ErrorInfo message={errMsg} />}
      <h2>Sign up</h2>

      <RegisterForm
        handlers={{
          onSignUpClicked,
          onUsernameChanged,
          onPasswordChanged,
          onConfirmPasswordChanged,
          onPersistToggle,
        }}
        canSave={canSave}
        data={{
          username,
          password,
          confirmPassword,
          persist,
        }}
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
