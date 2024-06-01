import ReactQuill from "react-quill";
import { StyledErrorReportContentEditorDescription } from "../styles/ErrorReportContentEditorDescription.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorReportDescription,
  setErrorReportDescription,
} from "../slices/errorReportSlice";

export default function ErrorReportContentEditorDescription() {
  const errorReportDescription = useSelector(selectErrorReportDescription);

  const dispatch = useDispatch();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, false] }],
  ];

  const quillModules = { toolbar: toolbarOptions };

  return (
    <StyledErrorReportContentEditorDescription>
      <h3>
        Opis błędu <span className="sunset">*</span>
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
