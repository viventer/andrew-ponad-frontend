import { StyledAdminPanelTab } from "../styles/AdminPanelTab.styled";
import ErrorReportsFilters from "./ErrorReportsFilters";
import ErrorReportsList from "./ErrorReportsList";

export default function ErrorReportsTab() {
  return (
    <StyledAdminPanelTab>
      <ErrorReportsFilters />
      <ErrorReportsList />
    </StyledAdminPanelTab>
  );
}
