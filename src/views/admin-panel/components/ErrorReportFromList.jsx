import { useEffect, useState } from "react";
import { StyledErrorReportFromList } from "../styles/ErrorReportFromList.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDialogAction,
  selectDialogAnswer,
  setDialogAction,
  setDialogAnswer,
  setDialogOptions,
  setErrMsg,
  setIsLoading,
} from "../../global/slices/globalStatesSlice";
import {
  useChangeErrorReportStatusMutation,
  useDeleteErrorReportMutation,
} from "../../error-reports/slices/errorReportApiSlice";
import useTranslateErrorReportsStatus from "../../../hooks/useTranslateErrorReportsStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCheckCircle,
  faSave,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ErrorReportFromListDetails from "./ErrorReportFromListDetails";
import StatusSelector from "./StatusSelector";

export default function ErrorReportFromList({
  reportData,
  setReloadComponent,
}) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);

  const [
    changeStatusMutation,
    { isLoading: isChangeLoading, isSuccess: isChangeSuccess },
  ] = useChangeErrorReportStatusMutation();
  const [
    deleteErrorReportMutation,
    { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },
  ] = useDeleteErrorReportMutation(reportData.id);

  const translateStatus = useTranslateErrorReportsStatus();
  const statusInPolish = translateStatus(reportData.status, "polish");
  const [selectedStatus, setSelectedStatus] = useState(statusInPolish);

  const changeStatus = async () => {
    const translatedSelectedStatus = translateStatus(selectedStatus, "english");

    if (reportData.status == translatedSelectedStatus) {
      dispatch(setErrMsg("Zgłoszenie posiada już wybrany status."));
      return;
    }

    try {
      await changeStatusMutation({
        id: reportData.id,
        newStatus: translatedSelectedStatus,
      }).unwrap();
    } catch (err) {
      if (!err?.originalStatus && !err?.status) {
        setErrMsg("Brak odpowiedzi serwera. Sprawdź połączenie sieciowe.");
      } else {
        setErrMsg(err?.data?.message);
      }
    }
  };

  const showDialog = () => {
    dispatch(
      setDialogMsg(
        "Czy na pewno chcesz usunąć zgłoszenie? Ta operacja jest nieodwracalna."
      )
    );
    dispatch(setDialogOptions(["Tak", "Nie"]));
    dispatch(setDialogAction(`deleteErrorReport${reportData.id}`));
  };

  useEffect(() => {
    if (dialogAnswer == "Tak" && dialogAction == `deletePost${postData.id}`) {
      deleteReport();
    }
    dispatch(setDialogAction(null));
    dispatch(setDialogAnswer(null));
  }, [dialogAnswer]);

  useEffect(() => {
    if (isChangeLoading || isDeleteLoading) {
      dispatch(setIsLoading(true));
    } else if (isChangeSuccess) {
      dispatch(setIsLoading(false));
      setShowSuccessIcon(true);
      setTimeout(() => {
        setShowSuccessIcon(false);
        setReloadComponent((prev) => !prev);
      }, 1500);
    } else if (isDeleteSuccess) {
      dispatch(setIsLoading(false));
      setTimeout(() => {
        setReloadComponent((prev) => !prev);
      }, 1000);
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isChangeSuccess, isChangeLoading, isDeleteSuccess, isDeleteLoading]);

  const deleteReport = async () => {
    try {
      await deleteErrorReportMutation(reportData.id).unwrap();
    } catch (err) {
      if (!err?.status && !err?.originalStatus) {
        dispatch(
          setErrMsg("Brak odpowiedzi serwera. Sprawdź połączenie sieciowe.")
        );
      } else {
        dispatch(setErrMsg(err?.data?.message || "Błąd usuwania zgłoszenia."));
      }
    }
  };

  return (
    <StyledErrorReportFromList className={`${isDeleted ? "hide" : ""}`}>
      <div className="shortInfo">
        <div onClick={() => setShowDetails((prev) => !prev)}>
          <FontAwesomeIcon icon={faBug} className="icon" />
          <p>{reportData.title}</p>
        </div>
        <div className="rightSectionWrapper">
          <div>
            <StatusSelector
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
            <button onClick={changeStatus}>
              {showSuccessIcon ? (
                <FontAwesomeIcon icon={faSave} className="saveIcon icon" />
              ) : (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="successIcon icon"
                />
              )}
            </button>
          </div>
          <button onClick={showDialog} className="deleteButton">
            <FontAwesomeIcon icon={faTrash} className="delteIcon icon" />
          </button>
        </div>
      </div>
      {showDetails && <ErrorReportFromListDetails reportData={reportData} />}
    </StyledErrorReportFromList>
  );
}
