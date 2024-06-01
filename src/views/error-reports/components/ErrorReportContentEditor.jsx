import { StyledErrorReportContentEditor } from "../styles/ErrorReportContentEditor.styled";
import ErrorReportContentEditorDescription from "./ErrorReportContentEditorDescription";
import ErrorReportContentEditorImages from "./ErrorReportContentEditorImages";

export default function ErrorReportContentEditor() {
  return (
    <StyledErrorReportContentEditor>
      <ErrorReportContentEditorDescription />
      <ErrorReportContentEditorImages />
    </StyledErrorReportContentEditor>
  );
}
