import UsersFilters from "./UsersFilters";
import UsersList from "./UsersList";
import { StyledUsersTab } from "../styles/UsersTab.styled";

export default function UsersTab() {
  return (
    <StyledUsersTab>
      <UsersFilters />
      <UsersList />
    </StyledUsersTab>
  );
}
