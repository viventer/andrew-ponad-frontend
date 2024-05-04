import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";

import { useDeleteUserMutation } from "../../global/slices/usersApiSlice";
import { selectUserId } from "../../auth/slices/authSlice";
import { useLogoutMutation } from "../../auth/slices/authApiSlice";
import {
  selectDialogAction,
  selectDialogAnswer,
  setDialogAction,
  setDialogAnswer,
  setDialogMsg,
  setDialogOptions,
  setErrMsg,
  setIsLoading,
  setIsLogged,
} from "../../global/slices/globalStatesSlice";

import { StyledButton } from "../../global/styles/Button.styled";

export default function DeleteAccountButton() {
  const dispatch = useDispatch();

  const userId = useSelector(selectUserId) || 0;
  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);

  const [deleteUser, { isDeletingLoading }] = useDeleteUserMutation(userId);
  const [signOut, { isLoggingOutLoading, isError, error }] =
    useLogoutMutation();

  useEffect(() => {
    if (dialogAnswer == "Tak" && dialogAction == "deleteAccount") {
      deleteAccount();
    }
    dispatch(setDialogAnswer(null));
    dispatch(setDialogAction(null));
  }, [dialogAnswer]);

  const showDialog = () => {
    dispatch(setDialogOptions(["Tak", "Nie"]));
    dispatch(setDialogAction("deleteAccount"));
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
        dispatch(setErrMsg(error?.data?.message || "Błąd usuwania konta."));
        dispatch(setIsLoading(false));
        return;
      } else if (isDeletingLoading || isLoggingOutLoading) {
        dispatch(setIsLoading(true));
        return;
      } else {
        dispatch(setIsLogged(false));
        dispatch(setIsLoading(false));
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      dispatch(setIsLoading(false));
    }
  };

  return (
    <StyledButton onClick={showDialog}>
      <FontAwesomeIcon icon={faUserSlash} />
      Usuń konto
    </StyledButton>
  );
}
