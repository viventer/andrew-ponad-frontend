import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import {
  selectDialogAction,
  setDialogAnswer,
  setDialogMsg,
  setDialogOptions,
} from "../slices/globalStatesSlice";

import { StyledFixedModal } from "../styles/FixedModal.styled";
import { StyledButton } from "../styles/Button.styled";

export default function DialogWindow({ message, options }) {
  const dispatch = useDispatch();
  const action = useSelector(selectDialogAction);

  const closeDialog = (answer) => {
    dispatch(setDialogAnswer(answer));
    dispatch(setDialogMsg(null));
    dispatch(setDialogOptions([]));
  };

  return (
    <StyledFixedModal
      style={{ display: message ? "flex" : "none" }}
      className={`transition ${
        action == "deleteAccount" ? "confirmation" : ""
      }`}
    >
      <dialog className="container">
        <h2>
          <div>
            <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
          </div>
          {message}
        </h2>
        <section>
          <StyledButton onClick={() => closeDialog(options[0])}>
            {options[0]}
          </StyledButton>
          <StyledButton onClick={() => closeDialog(options[1])}>
            {options[1]}
          </StyledButton>
        </section>
      </dialog>
    </StyledFixedModal>
  );
}
