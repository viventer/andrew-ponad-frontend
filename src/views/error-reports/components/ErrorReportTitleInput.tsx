import { useDispatch, useSelector } from "react-redux";

import {
  selectErrorReportTitle,
  setErrorReportTitle,
} from "../slices/errorReportSlice";
import { setErrMsg } from "../../global/slices/globalStatesSlice";

import { StyledErrorReportTitleInput } from "../styles/ErrorReportTitleInput.styled";

export default function ErrorReportTitleInput() {
  const dispatch = useDispatch();
  const title = useSelector(selectErrorReportTitle);

  return (
    <StyledErrorReportTitleInput data-test="titleInput">
      <label htmlFor="titleInput">
        Tytuł zgłoszenia <span className="sunset">*</span>
      </label>
      <input
        type="text"
        placeholder="Błąd przy przeglądaniu posta"
        value={title}
        onChange={(e) => dispatch(setErrorReportTitle(e.target.value))}
        maxLength={40}
        onKeyDown={() => {
          if (title.length >= 40) {
            dispatch(setErrMsg("Tytuł może zawierać maksymalnie 40 znaków"));
          }
        }}
        id="titleInput"
      />
    </StyledErrorReportTitleInput>
  );
}
