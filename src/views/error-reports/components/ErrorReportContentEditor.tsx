import ErrorReportContentEditorDescription from "./ErrorReportContentEditorDescription";
import ErrorReportContentEditorImages from "./ErrorReportContentEditorImages";

export default function ErrorReportContentEditor({
  isDescriptionLengthCorrect,
}: {
  isDescriptionLengthCorrect: boolean;
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
