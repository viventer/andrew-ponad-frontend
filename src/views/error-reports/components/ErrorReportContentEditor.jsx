import ErrorReportContentEditorDescription from "./ErrorReportContentEditorDescription";
import ErrorReportContentEditorImages from "./ErrorReportContentEditorImages";

export default function ErrorReportContentEditor({
  isDescriptionLengthCorrect,
}) {
  return (
    <>
      <ErrorReportContentEditorDescription
        isDescriptionLengthCorrect={isDescriptionLengthCorrect}
      />
      <ErrorReportContentEditorImages />
    </>
  );
}
