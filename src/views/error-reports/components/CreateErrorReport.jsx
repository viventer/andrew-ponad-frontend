import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledCreateErrorReport } from "../styles/CreateErrorReport.styled";
import ErrorReportForm from "./ErrorReportForm";
import { faBug, faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setIsErrorReportVisible } from "../../global/slices/globalStatesSlice";
import { resetErrorReportState } from "../slices/errorReportSlice";

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
    </StyledCreateErrorReport>
  );
}
