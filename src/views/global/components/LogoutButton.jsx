import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";

import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";

import ErrorInfo from "./ErrorInfo";

import { useLogoutMutation } from "../../auth/slices/authApiSlice";

import useAuth from "../../../hooks/useAuth";

export default function LogoutButton() {
  const [signOut, { isLoading, isError, error }] = useLogoutMutation();

  const navigate = useNavigate();

  const { setIsLogged } = useAuth();

  async function handleLogOut() {
    await signOut();
    if (isError) {
      return <ErrorInfo message={error} />;
    } else if (isLoading) {
      return <HashLoader color="white" className="hashLoader" />;
    } else {
      setIsLogged(false);
      navigate("/");
      window.location.reload();
    }
  }

  return (
    <StyledButton onClick={handleLogOut}>
      <FontAwesomeIcon icon={faRightFromBracket} />
      Wyloguj się
    </StyledButton>
  );
}
