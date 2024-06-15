import { useDispatch, useSelector } from "react-redux";
import { StyledErrorReportForm } from "../styles/ErrorReportForm.styled";
import ErrorReportContentEditor from "./ErrorReportContentEditor";
import {
  resetErrorReportState,
  selectErrorReportDescription,
  selectErrorReportImages,
  selectErrorReportTitle,
} from "../slices/errorReportSlice";
import {
  setErrMsg,
  setIsErrorReportVisible,
  setIsLoading,
  setSuccessMsg,
} from "../../global/slices/globalStatesSlice";
import { StyledButton } from "../../global/styles/Button.styled";
import { useCreateNewErrorReportMutation } from "../slices/errorReportApiSlice";
import { selectUserId } from "../../auth/slices/authSlice";
import ErrorReportTitleInput from "./ErrorReportTitleInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import useGetTextOnlyLength from "../../../hooks/useGetTextOnlyLength";

export default function ErrorReportForm() {
  const title = useSelector(selectErrorReportTitle);
  const description = useSelector(selectErrorReportDescription);
  const images = useSelector(selectErrorReportImages);
  const userId = useSelector(selectUserId);

  const dispatch = useDispatch();

  const [createNewErrorReport, { isLoading, isSuccess, isError }] =
    useCreateNewErrorReportMutation();

  const sendReport = async () => {
    try {
      console.log("próba");
      await createNewErrorReport({
        title,
        description,
        images,
        author: userId,
      }).unwrap();
    } catch (err) {
      handleCreateReportError(err);
    }
  };

  const handleCreateReportError = (err) => {
    if (
      (!err?.originalStatus && !err?.status) ||
      err?.status === "FETCH_ERROR"
    ) {
      console.log(err);
      dispatch(setErrMsg("Brak odpowiedzi serwera"));
    } else if (err.originalStatus === 400 || err.status === 400) {
      dispatch(setErrMsg("Uzupełnij wymagane pola"));
    }
  };

  useEffect(() => {
    if (isLoading) {
      console.log("loading");
      dispatch(setIsLoading(true));
      return;
    } else if (isSuccess) {
      dispatch(setIsLoading(false));
      dispatch(setSuccessMsg("Zgłoszenie zostało wysłane."));
      dispatch(resetErrorReportState());
      dispatch(setIsErrorReportVisible(false));
    } else if (isError) {
      dispatch(setIsErrorReportVisible(false));
    }
  }, [isLoading]);

  const descriptionTextOnlyLength = useGetTextOnlyLength(description);
  const isDescriptionLengthCorrect =
    descriptionTextOnlyLength <= 1000 &&
    description.length <= 1400 &&
    (descriptionTextOnlyLength >= 24 || description.length >= 50);
  const isDataProvided = title && description;

  return (
    <StyledErrorReportForm onSubmit={(e) => e.preventDefault()}>
      <ErrorReportTitleInput />
      <ErrorReportContentEditor
        isDescriptionLengthCorrect={isDescriptionLengthCorrect}
      />
      <p>
        <span className="sunset">*</span> pole wymagane
      </p>
      <StyledButton
        onClick={sendReport}
        disabled={!(isDataProvided && isDescriptionLengthCorrect)}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
        Wyślij zgłoszenie
      </StyledButton>
    </StyledErrorReportForm>
  );
}
