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

  const [deleteUser, { isLoading }] = useDeleteUserMutation(userId);

  const { setIsLogged } = useAuth();

  const deleteAccount = async () => {
    try {
      await deleteUser(userId).unwrap();
      setIsLogged(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading)
    return (
      <div className="flex">
        <HashLoader color="fff" className="hashLoader" />
      </div>
    );

  return (
    <StyledButton onClick={deleteAccount}>
      <FontAwesomeIcon icon={faUserSlash} />
      Usuń konto
    </StyledButton>
  );
}
