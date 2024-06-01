import { StyledErrorReportContentEditor } from "../styles/ErrorReportContentEditor.styled";
import ErrorReportContentEditorDescription from "./ErrorReportContentEditorDescription";
import ErrorReportContentEditorImages from "./ErrorReportContentEditorImages";

export default function ErrorReportContentEditor() {
  return (
    <StyledErrorReportContentEditor>
      <div className="flex">
        <ErrorReportContentEditorDescription />
        <p>*</p>
      </div>
      <ErrorReportContentEditorImages />
    </StyledErrorReportContentEditor>
  );
}
