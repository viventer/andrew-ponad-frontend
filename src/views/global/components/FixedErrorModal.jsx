import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { setErrMsg } from "../slices/globalStatesSlice";

import { StyledFixedErrorModal } from "../styles/FixedErrorModal.styled";

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
    <StyledFixedErrorModal style={{ display: message ? "flex" : "none" }}>
      <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
      <p>{message?.error || message?.message || message}</p>
    </StyledFixedErrorModal>
  );
}
