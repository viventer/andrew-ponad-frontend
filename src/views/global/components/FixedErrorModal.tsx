import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { setErrMsg } from "../slices/globalStatesSlice";

import { StyledFixedErrorModal } from "../styles/FixedErrorModal.styled";
import { useEffect, useRef } from "react";

export default function FixedErrorModal({ message }: { message: string }) {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        hideModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const hideModal = () => {
    dispatch(setErrMsg(""));
  };

  return (
    <StyledFixedErrorModal
      style={{ display: message ? "flex" : "none" }}
      ref={modalRef}
    >
      <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
      <p>{message}</p>
      <button onClick={() => hideModal()}>
        <FontAwesomeIcon icon={faClose} className="icon transition" />
      </button>
    </StyledFixedErrorModal>
  );
}
