import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterSelector from "./FilterSelector";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../global/components/SearchBar";
import { StyledAdminPanelFilters } from "../styles/AdminPanelFilters.styled";

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
    "Niezweryfikowany",
    "Dowolna",
  ];

  return (
    <StyledAdminPanelFilters>
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
    </StyledAdminPanelFilters>
  );
}
