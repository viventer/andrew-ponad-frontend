import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterSelector from "./FilterSelector";
import { StyledUsersFilters } from "../styles/UsersFilters.styled";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../global/components/SearchBar";

export default function UsersFilters({
  roleFilter,
  setRoleFilter,
  searchQuery,
  setSearchQuery,
}) {
  const rolesOptions = [
    "Admin",
    "Edytor",
    "Twórca",
    "Zweryfikowany",
    "Użytkownik",
    "Dowolna",
  ];

  return (
    <StyledUsersFilters>
      <FontAwesomeIcon icon={faFilter} className="icon" />
      <FilterSelector
        selectedFilter={roleFilter}
        setFilter={setRoleFilter}
        options={rolesOptions}
      />
      <SearchBar
        view="adminPanel"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Kogo szukasz?"
      />
    </StyledUsersFilters>
  );
}
