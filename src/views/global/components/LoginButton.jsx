import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../global/styles/Button.styled";
import ErrorInfo from "./ErrorInfo";

import { useLogoutMutation } from "../slices/authApiSlice";

import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function SignOutButton() {
  const [signOut, { isLoading, isError, error }] = useLogoutMutation();

  const navigate = useNavigate();

  const { setIsLogged } = useAuth();

  async function handleLogOut() {
    await signOut();
    if (isError) {
      return <ErrorInfo message={error} />;
    } else if (isLoading) {
      return <HashLoader color="fff" />;
    } else {
      setIsLogged(false);
      navigate("/");
      // You have to reload the page to see sign in and sign up buttons in header
      window.location.reload();
    }
  }

  return (
    <StyledButton onClick={handleLogOut}>
      <FontAwesomeIcon icon={faRightToBracket} />
      Zaloguj się
    </StyledButton>
  );
}
