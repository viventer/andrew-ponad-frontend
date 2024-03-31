import { useState } from "react";
import { StyledUsersTab } from "../styles/UsersTab.styled";
import UsersFilters from "./UsersFilters";
import SearchBar from "../../global/components/SearchBar";

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
      <UsersList />
    </StyledUsersTab>
  );
}
