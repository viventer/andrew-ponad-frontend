import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../styles/Buttons.styled";
import ErrorInfo from "./ErrorInfo";

import { useLogoutMutation } from "../slices/authApiSlice";

import useAuth from "../../hooks/useAuth";

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
    <StyledButton style={{ marginLeft: "1rem" }} onClick={handleLogOut}>
      <p>Sign out</p>
    </StyledButton>
  );
}
