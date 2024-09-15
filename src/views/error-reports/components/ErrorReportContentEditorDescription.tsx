import { useDispatch, useSelector } from "react-redux";

import ReactQuill from "react-quill";

import {
  selectErrorReportDescription,
  setErrorReportDescription,
} from "../slices/errorReportSlice";

import { StyledErrorReportContentEditorDescription } from "../styles/ErrorReportContentEditorDescription.styled";

export default function ErrorReportContentEditorDescription({
  isDescriptionLengthCorrect,
}: {
  isDescriptionLengthCorrect: boolean;
}) {
  const errorReportDescription = useSelector(selectErrorReportDescription);

  const dispatch = useDispatch();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, false] }],
  ];

  const quillModules = { toolbar: toolbarOptions };

  return (
    <StyledErrorReportContentEditorDescription data-test="descriptionInput">
      <h3>
        Opis błędu&nbsp;
        <span className={isDescriptionLengthCorrect ? "green" : "red"}>
          (24 - 1000 znaków)
        </span>
        <span className="sunset">*</span>
      </h3>
      <ReactQuill
        theme="snow"
        value={errorReportDescription}
        onChange={(content) => {
          dispatch(setErrorReportDescription(content));
        }}
        modules={quillModules}
        className="quill"
      />
    </StyledErrorReportContentEditorDescription>
  );
}
