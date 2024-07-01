import { useDispatch } from "react-redux";

import {
  faBug,
  faClose,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setIsErrorReportVisible } from "../../global/slices/globalStatesSlice";
import { resetErrorReportState } from "../slices/errorReportSlice";

import { StyledCreateErrorReport } from "../styles/CreateErrorReport.styled";
import ErrorReportForm from "./ErrorReportForm";

export default function CreateErrorReport() {
  const dispatch = useDispatch();

  return (
    <StyledCreateErrorReport>
      <button
        onClick={() => {
          dispatch(setIsErrorReportVisible(false));
          dispatch(resetErrorReportState());
        }}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div className="flex">
        <FontAwesomeIcon icon={faBug} className="icon" />
        <h2>Utwórz zgłoszenie błędu</h2>
      </div>
      <ErrorReportForm />
      <section className="flex">
        <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
        <p>
          Wysłanie zgłoszenia nie jest możliwe? Napisz do nas na maila:
          <span className="bold"> andrew.ponad@gmail.com</span>
        </p>
      </section>
    </StyledCreateErrorReport>
  );
}
