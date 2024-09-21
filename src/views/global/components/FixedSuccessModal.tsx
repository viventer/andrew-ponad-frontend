import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";
import { StyledFixedModal } from "../styles/FixedModal.styled";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSuccessMsg } from "../slices/globalStatesSlice";

export default function FixedSuccessModal({ message }: { message: string }) {
  const dispatch = useDispatch();

  return (
    <StyledFixedModal
      style={{ display: message ? "flex" : "none" }}
      className="transition"
    >
      <div className="container success">
        <div>
          <FontAwesomeIcon icon={faCircleCheck} className="icon" />
          <p>{message}</p>
        </div>
        <StyledButton
          onClick={() => {
            dispatch(setSuccessMsg(""));
          }}
          data-test="successModalButton"
        >
          OK
        </StyledButton>
      </div>
    </StyledFixedModal>
  );
}
