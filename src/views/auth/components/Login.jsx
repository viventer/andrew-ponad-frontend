import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch } from "react-redux";

import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/authApiSlice";

import usePersist from "../../../hooks/usePersist";
import useAuth from "../../../hooks/useAuth";

import ErrorWindow from "../../global/components/ErrorWindow";
import LoginForm from "./LoginForm";
import { StyledAuth } from "../styles/Login.styled";

export default function Login() {
  const { setIsLogged, isLogged } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isLogged) {
      navigate(from, { replace: true });
    }
  }, []);

  const usernameRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ username, accessToken }));
      setUsername("");
      setPassword("");
      if (!isLogged) {
        setIsLogged(true);
      }
      navigate(from, { replace: true });
    } catch (err) {
      if (!err.originalStatus) {
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handlePersistToggle = () => setPersist((prev) => !prev);

  if (isLoading)
    return (
      <div className="flex">
        <HashLoader color="fff" />
      </div>
    );

  const canSubmit = username && password;

  const content = (
    <StyledAuth>
      {errMsg && <ErrorWindow aria-live="assertive" message={errMsg} />}
      <h2>Zaloguj się</h2>
      <LoginForm
        handlers={{
          handleSubmit,
          handleUserInput,
          handlePwdInput,
          handlePersistToggle,
        }}
        loginData={{ username, password, persist }}
        usernameRef={usernameRef}
        canSubmit={canSubmit}
      />
      <div className="flex">
        <p>Nie masz konta? </p>
        <Link to="/register" className="reactRouterLink">
          <p>Zarejestruj się</p>
        </Link>
      </div>
    </StyledAuth>
  );

  return content;
}
