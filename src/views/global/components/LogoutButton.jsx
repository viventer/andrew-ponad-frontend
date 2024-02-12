import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";

import { useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../../auth/slices/authApiSlice";

import useAuth from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setErrMsg, setIsLoading } from "../slices/globalStatesSlice";
import usePersist from "../../../hooks/usePersist";

export default function LogoutButton() {
  const dispatch = useDispatch();

  const [signOut, { isLoading, isError, error }] = useLogoutMutation();

  const navigate = useNavigate();

  const { setIsLogged } = useAuth();

  async function handleLogOut() {
    await signOut();
    if (isError) {
      dispatch(setErrMsg(error));
      dispatch(setIsLoading(false));
      return;
    } else if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      setIsLogged(false);
      dispatch(setIsLoading(false));
      navigate("/");
    }
  }

  return (
    <StyledButton onClick={handleLogOut}>
      <FontAwesomeIcon icon={faRightFromBracket} />
      Wyloguj się
    </StyledButton>
  );
}
