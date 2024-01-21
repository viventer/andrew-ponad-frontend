import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch } from "react-redux";

import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/authApiSlice";

import usePersist from "../../../hooks/usePersist";
import useAuth from "../../../hooks/useAuth";

import ErrorInfo from "../../global/components/ErrorInfo";
import LoginForm from "./LoginForm";
import { StyledAuth } from "../styles/Login.styled";

export default function Login() {
  const { setIsLogged, isLogged } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [errMsg, setErrMsg] = useState("");

  const [persist, setPersist] = usePersist();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      navigate(from, { replace: true });
    }
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken, userId } = await login({
        username,
        password,
      }).unwrap();
      dispatch(setCredentials({ username, accessToken, userId }));
      setUsername("");
      setPassword("");
      if (!isLogged) {
        setIsLogged(true);
      }
      navigate(from, { replace: true });
    } catch (err) {
      handleLoginError(err);
    }
  };

  const handleLoginError = (err) => {
    if (!err.originalStatus && !err.status) {
      console.log(err);
      setErrMsg("Brak odpowiedzi serwera");
    } else if (err.originalStatus === 400) {
      setErrMsg("Uzupełnij wymagane pola");
    } else if (err.originalStatus === 401) {
      setErrMsg("Błędny login lub/i hasło");
    } else if (err.status === 429) {
      setErrMsg("Za dużo prób logowania, spróbuj ponownie za 60 sekund");
    } else {
      setErrMsg(err.data?.message);
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handlePersistToggle = () => setPersist((prev) => !prev);

  if (isLoading)
    return (
      <div className="flex">
        <HashLoader color="fff" className="hashLoader" />
      </div>
    );

  const canSubmit = username && password;

  const content = (
    <StyledAuth>
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
      {errMsg && <ErrorInfo aria-live="assertive" message={errMsg} />}
    </StyledAuth>
  );

  return content;
}
