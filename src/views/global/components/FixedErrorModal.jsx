import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { setErrMsg } from "../slices/globalStatesSlice";

import { StyledFixedErrorModal } from "../styles/FixedErrorModal.styled";

export default function FixedErrorModal({ message }) {
  const dispatch = useDispatch();

  return (
    <StyledFixedErrorModal style={{ display: message ? "flex" : "none" }}>
      <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
      <p>{message?.error || message?.message || JSON.stringify(message)}</p>
      <button onClick={() => dispatch(setErrMsg(""))}>
        <FontAwesomeIcon icon={faClose} className="icon transition" />
      </button>
    </StyledFixedErrorModal>
  );
}
