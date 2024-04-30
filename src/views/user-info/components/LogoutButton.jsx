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
  setIsUserInfoVisible,
  setUserData,
} from "../../global/slices/globalStatesSlice";

import { StyledButton } from "../../global/styles/Button.styled";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signOut, { isLoading, isError, error }] = useLogoutMutation();

  async function handleLogOut() {
    dispatch(setIsUserInfoVisible(false));
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
