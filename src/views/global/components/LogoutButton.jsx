import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLogoutMutation } from "../../auth/slices/authApiSlice";
import {
  setErrMsg,
  setIsLoading,
  setIsLogged,
  setUserData,
} from "../slices/globalStatesSlice";

import { StyledButton } from "../styles/Button.styled";

export default function LogoutButton({ setIsUserInfoVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signOut, { isLoading, isError, error }] = useLogoutMutation();

  async function handleLogOut() {
    setIsUserInfoVisible(false);
    await signOut();
    if (isError) {
      dispatch(setErrMsg(error));
      return;
    } else {
      dispatch(setIsLogged(false));
      dispatch(setUserData({}));
      navigate("/");
      window.location.reload();
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
