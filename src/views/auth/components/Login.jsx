import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/authApiSlice";
import {
  selectIsLogged,
  setIsLoading,
  setIsLogged,
} from "../../global/slices/globalStatesSlice";

import usePersist from "../../../hooks/usePersist";

import DynamicErrorNotification from "../../global/components/DynamicErrorNotification";
import LoginForm from "./LoginForm";
import { StyledAuth } from "../styles/Auth.styled";

export default function Login() {
  const isLogged = useSelector(selectIsLogged);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isLogged) {
      navigate(from, { replace: true });
    }
  }, []);

  const dispatch = useDispatch();
  const [persist, setPersist] = usePersist();
  const [login, { isLoading }] = useLoginMutation();

  const [errMsg, setErrMsg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

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
        dispatch(setIsLogged(true));
      }
      navigate(from, { replace: true });
    } catch (err) {
      handleLoginError(err);
    }
  };

  const handleLoginError = (err) => {
    if (!err?.originalStatus && !err?.status) {
      console.log(err);
      setErrMsg("Brak odpowiedzi serwera");
    } else if (err.originalStatus === 400) {
      setErrMsg("Uzupełnij wymagane pola");
    } else if (err.status === 401 || err.originalStatus === 401) {
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
      {errMsg && (
        <DynamicErrorNotification aria-live="assertive" message={errMsg} />
      )}
    </StyledAuth>
  );

  return content;
}
