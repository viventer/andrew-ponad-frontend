import UsersFilters from "./UsersFilters";
import UsersList from "./UsersList";
import { StyledAdminPanelTab } from "../styles/AdminPanelTab.styled";

export default function UsersTab() {
  return (
    <StyledAdminPanelTab>
      <UsersFilters />
      <UsersList />
    </StyledAdminPanelTab>
  );
}
