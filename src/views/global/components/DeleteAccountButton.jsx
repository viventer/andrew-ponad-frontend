import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";

import { useDeleteUserMutation } from "../slices/usersApiSlice";
import { selectUserId } from "../../auth/slices/authSlice";
import { useLogoutMutation } from "../../auth/slices/authApiSlice";
import {
  selectDialogAnswer,
  setDialogAnswer,
  setDialogMsg,
  setErrMsg,
  setIsLoading,
  setIsLogged,
} from "../slices/globalStatesSlice";

import { StyledButton } from "../styles/Button.styled";

export default function DeleteAccountButton() {
  const dispatch = useDispatch();

  const userId = useSelector(selectUserId) || 0;
  const dialogAnswer = useSelector(selectDialogAnswer);

  const [deleteUser, { isDeletingLoading }] = useDeleteUserMutation(userId);
  const [signOut, { isLoggingOutLoading, isError, error }] =
    useLogoutMutation();

  useEffect(() => {
    if (dialogAnswer == "yes") {
      deleteAccount();
    }
    dispatch(setDialogAnswer(null));
  }, [dialogAnswer]);

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
