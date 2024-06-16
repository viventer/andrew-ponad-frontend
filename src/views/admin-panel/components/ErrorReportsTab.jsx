import ErrorReportsFilters from "./ErrorReportsFilters";
import ErrorReportsList from "./ErrorReportsList";
import { StyledAdminPanelTab } from "../styles/AdminPanelTab.styled";

export default function ErrorReportsTab() {
  return (
    <StyledAdminPanelTab>
      <ErrorReportsFilters />
      <ErrorReportsList />
    </StyledAdminPanelTab>
  );
}
