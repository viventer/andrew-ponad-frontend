import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCheckCircle,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import {
  selectDialogAction,
  selectDialogAnswer,
  setDialogAction,
  setDialogAnswer,
  setDialogMsg,
  setDialogOptions,
  setErrMsg,
  setIsLoading,
} from "../../global/slices/globalStatesSlice";
import {
  useChangeErrorReportStatusMutation,
  useDeleteErrorReportMutation,
} from "../../error-reports/slices/errorReportApiSlice";

import useTranslateErrorReportsStatus from "../../../hooks/useTranslateErrorReportsStatus";

import ErrorReportFromListDetails from "./ErrorReportFromListDetails";
import StatusSelector from "./StatusSelector";
import { StyledElementFromList } from "../styles/ElementFromList.styled";

export default function ErrorReportFromList({
  reportData,
  setReloadComponent,
}) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

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
        dispatch(
          setErrMsg("Brak odpowiedzi serwera. Sprawdź połączenie sieciowe.")
        );
      } else {
        dispatch(setErrMsg(err?.data?.message));
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
    if (
      dialogAnswer == "Tak" &&
      dialogAction == `deleteErrorReport${reportData.id}`
    ) {
      deleteReport();
      setIsDeleted(true);
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [titleMaxLength, setTitleMaxLength] = useState(18);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1500) {
      setTitleMaxLength(40);
    } else if (windowWidth > 1025) {
      setTitleMaxLength(30);
    } else if (windowWidth > 820) {
      setTitleMaxLength(18);
    } else if (windowWidth > 625) {
      setTitleMaxLength(30);
    } else if (windowWidth > 530) {
      setTitleMaxLength(24);
    } else if (windowWidth > 360) {
      setTitleMaxLength(18);
    } else {
      setTitleMaxLength(16);
    }
  }, [windowWidth]);

  const shortenTitle =
    reportData.title.length > titleMaxLength
      ? reportData.title.slice(0, titleMaxLength) + "..."
      : reportData.title;

  return (
    <StyledElementFromList className={`${isDeleted ? "hide" : ""}`}>
      <div className="shortInfo errorReportShortInfo">
        <div
          onClick={() => setShowDetails((prev) => !prev)}
          className="errorReportTitle"
        >
          <FontAwesomeIcon icon={faBug} className="icon" />
          <p>{shortenTitle}</p>
        </div>
        <div className="rightSectionWrapper">
          <div>
            <StatusSelector
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
            <button onClick={changeStatus}>
              {showSuccessIcon ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="successIcon icon"
                />
              ) : (
                <FontAwesomeIcon icon={faSave} className="saveIcon icon" />
              )}
            </button>
          </div>
          <button onClick={showDialog} className="deleteButton">
            <FontAwesomeIcon icon={faTrash} className="delteIcon icon" />
          </button>
        </div>
      </div>
      {showDetails && <ErrorReportFromListDetails reportData={reportData} />}
    </StyledElementFromList>
  );
}
