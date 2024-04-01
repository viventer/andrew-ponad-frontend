import { useState } from "react";
import { StyledUsersTab } from "../styles/UsersTab.styled";
import UsersFilters from "./UsersFilters";
import UsersList from "./UsersList";

export default function UsersTab() {
  const [roleFilter, setRoleFilter] = useState("Wybierz rolę");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StyledUsersTab>
      <UsersFilters
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <UsersList roleFilter={roleFilter} searchQuery={searchQuery} />
    </StyledUsersTab>
  );
}
