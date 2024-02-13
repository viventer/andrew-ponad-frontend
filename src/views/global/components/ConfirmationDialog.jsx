import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import { setDialogAnswer, setDialogMsg } from "../slices/globalStatesSlice";

import { StyledConfirmationDialog } from "../styles/ConfirmationDialog.styled";
import { StyledButton } from "../styles/Button.styled";

export default function ConfirmationDialog({ message }) {
  const dispatch = useDispatch();

  const closeDialog = (answer) => {
    dispatch(setDialogAnswer(answer));
    dispatch(setDialogMsg(""));
  };

  return (
    <StyledConfirmationDialog
      style={{ display: message ? "flex" : "none" }}
      className="transition"
    >
      <dialog>
        <h2>
          <div>
            <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
          </div>
          {message}
        </h2>
        <section>
          <StyledButton onClick={() => closeDialog("yes")}>Tak</StyledButton>
          <StyledButton onClick={() => closeDialog("no")}>Nie</StyledButton>
        </section>
      </dialog>
    </StyledConfirmationDialog>
  );
}
