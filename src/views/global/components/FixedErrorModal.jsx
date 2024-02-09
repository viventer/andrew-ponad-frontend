import { useEffect } from "react";
import { StyledFixedErrorModal } from "../styles/FixedErrorModal.styled";
import { useDispatch } from "react-redux";
import { setErrMsg } from "../slices/globalStatesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function FixedErrorModal({ message }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(setErrMsg(""));
      }, 5000);
    }
  });

  return (
    <StyledFixedErrorModal
      style={{ opacity: message ? 1 : 0 }}
      className="transition"
    >
      <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
      <p>{message?.error || message?.message || message}</p>
    </StyledFixedErrorModal>
  );
}
