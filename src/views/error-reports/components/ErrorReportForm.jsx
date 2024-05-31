import { useDispatch, useSelector } from "react-redux";
import { StyledErrorReportForm } from "../styles/ErrorReportForm.styled";
import ErrorReportContentEditor from "./ErrorReportContentEditor";
import {
  selectErrorReportTitle,
  setErrorReportTitle,
} from "../slices/errorReportSlice";
import { setErrMsg } from "../../global/slices/globalStatesSlice";

export default function ErrorReportForm() {
  const errorReportTitle = useSelector(selectErrorReportTitle);

  const dispatch = useDispatch();

  return (
    <StyledErrorReportForm onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Tytuł zgłoszenia"
        value={errorReportTitle}
        onChange={(e) => dispatch(setErrorReportTitle(e.target.value))}
        maxLength={40}
        onKeyDown={() => {
          if (errorReportTitle.length >= 40) {
            dispatch(setErrMsg("Tytuł może zawierać maksymalnie 40 znaków"));
          }
        }}
      />
      <ErrorReportContentEditor />
    </StyledErrorReportForm>
  );
}
