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
  setSuccessMsg,
} from "../../global/slices/globalStatesSlice";
import { StyledButton } from "../../global/styles/Button.styled";
import { useCreateNewErrorReportMutation } from "../slices/errorReportApiSlice";
import { selectUserId } from "../../auth/slices/authSlice";
import ErrorReportTitleInput from "./ErrorReportTitleInput";

export default function ErrorReportForm() {
  const title = useSelector(selectErrorReportTitle);
  const description = useSelector(selectErrorReportDescription);
  const images = useSelector(selectErrorReportImages);
  const userId = useSelector(selectUserId);

  const dispatch = useDispatch();

  const [createNewErrorReport, { isLoading }] =
    useCreateNewErrorReportMutation();

  const sendReport = async () => {
    try {
      console.log("tak");
      await createNewErrorReport({
        title,
        description,
        images,
        author: userId,
      }).unwrap();
      dispatch(setSuccessMsg("Zgłoszenie zostało wysłane."));
      dispatch(setIsErrorReportVisible(false));
      dispatch(resetErrorReportState());
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

  const isDataProvided = title && description.length >= 24;

  return (
    <StyledErrorReportForm onSubmit={(e) => e.preventDefault()}>
      <ErrorReportTitleInput />
      <ErrorReportContentEditor />
      <p>* pole wymagane</p>
      <StyledButton onClick={sendReport} disabled={!isDataProvided}>
        Wyślij zgłoszenie
      </StyledButton>
    </StyledErrorReportForm>
  );
}
