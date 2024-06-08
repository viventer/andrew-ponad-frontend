import { StyledErrorReportsTab } from "../styles/ErrorReportsTab.styled";
import ErrorReportsFilters from "./ErrorReportsFilters";
import ErrorReportsList from "./ErrorReportsList";

export default function ErrorReportsTab() {
  return (
    <StyledErrorReportsTab>
      <ErrorReportsFilters />
      <ErrorReportsList />
    </StyledErrorReportsTab>
  );
}
