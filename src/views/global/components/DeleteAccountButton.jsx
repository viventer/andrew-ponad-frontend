import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";
import { useDeleteUserMutation } from "../slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../auth/slices/authSlice";
import { useLogoutMutation } from "../../auth/slices/authApiSlice";
import useAuth from "../../../hooks/useAuth";
import {
  selectDialogAnswer,
  setDialogAnswer,
  setDialogMsg,
  setErrMsg,
  setIsLoading,
} from "../slices/globalStatesSlice";
import { useEffect } from "react";

export default function DeleteAccountButton() {
  const userId = useSelector(selectUserId) || 0;

  const [deleteUser, { isDeletingLoading }] = useDeleteUserMutation(userId);
  const [signOut, { isLoggingOutLoading, isError, error }] =
    useLogoutMutation();

  const { setIsLogged } = useAuth();

  const dispatch = useDispatch();
  const dialogAnswer = useSelector(selectDialogAnswer);

  const showDialog = () => {
    dispatch(
      setDialogMsg(
        "Czy na pewno chcesz usunąć konto? Ta operacja jest nieodwracalna."
      )
    );
  };

  const deleteAccount = async () => {
    try {
      await deleteUser(userId).unwrap();
      await signOut();
      if (isError) {
        dispatch(setErrMsg(error));
        dispatch(setIsLoading(false));
        return;
      } else if (isDeletingLoading || isLoggingOutLoading) {
        dispatch(setIsLoading(true));
        return;
      } else {
        setIsLogged(false);
        dispatch(setIsLoading(false));
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    if (dialogAnswer == "yes") {
      deleteAccount();
    }
    dispatch(setDialogAnswer(null));
  }, [dialogAnswer]);

  return (
    <StyledButton onClick={showDialog}>
      <FontAwesomeIcon icon={faUserSlash} />
      Usuń konto
    </StyledButton>
  );
}
