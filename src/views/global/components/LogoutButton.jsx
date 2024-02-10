import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";

import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../../auth/slices/authApiSlice";

import useAuth from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setErrMsg } from "../slices/globalStatesSlice";

export default function LogoutButton() {
  const dispatch = useDispatch();

  const [signOut, { isLoading, isError, error }] = useLogoutMutation();

  const navigate = useNavigate();

  const { setIsLogged } = useAuth();

  async function handleLogOut() {
    await signOut();
    if (isError) {
      dispatch(setErrMsg(error));
      return;
    } else if (isLoading) {
      return <HashLoader color="white" className="hashLoader" />;
    } else {
      setIsLogged(false);
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
