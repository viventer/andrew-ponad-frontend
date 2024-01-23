import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";
import { useDeleteUserMutation } from "../slices/usersApiSlice";
import { useSelector } from "react-redux";
import { selectUserId } from "../../auth/slices/authSlice";
import { useLogoutMutation } from "../../auth/slices/authApiSlice";
import ErrorWindow from "./ErrorWindow";
import { HashLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";

export default function DeleteAccountButton() {
  const userId = useSelector(selectUserId);

  const [deleteUser, { isDeletingLoading }] = useDeleteUserMutation(userId);
  const [signOut, { isLoggingOutLoading, isError, error }] =
    useLogoutMutation();

  const { setIsLogged } = useAuth();

  const deleteAccount = async () => {
    try {
      await deleteUser(userId).unwrap();
      await signOut();
      if (isError) {
        return <ErrorWindow message={error} />;
      } else if (isDeletingLoading || isLoggingOutLoading) {
        return <HashLoader color="white" className="hashLoader" />;
      } else {
        setIsLogged(false);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledButton onClick={deleteAccount}>
      <FontAwesomeIcon icon={faUserSlash} />
      Usuń konto
    </StyledButton>
  );
}
