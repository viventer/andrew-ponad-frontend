import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLogoutMutation } from "../../auth/slices/authApiSlice";
import {
  setErrMsg,
  setIsLoading,
  setUserData,
} from "../slices/globalStatesSlice";

import useAuth from "../../../hooks/useAuth";

import { StyledButton } from "../styles/Button.styled";
import { useEffect } from "react";

export default function LogoutButton({ setIsUserInfoVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setIsLogged } = useAuth();

  const [signOut, { isLoading, isError, error }] = useLogoutMutation();

  async function handleLogOut() {
    setIsUserInfoVisible(false);
    await signOut();
    if (isError) {
      dispatch(setErrMsg(error));
      return;
    } else {
      setIsLogged(false);
      dispatch(setUserData({}));
      navigate("/");
    }
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <StyledButton onClick={handleLogOut}>
      <FontAwesomeIcon icon={faRightFromBracket} />
      Wyloguj się
    </StyledButton>
  );
}
