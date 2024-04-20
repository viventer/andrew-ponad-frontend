import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../global/components/SearchBar";

import {
  selectRoleFilter,
  selectUsersTabSearchQuery,
  setRoleFilter,
  setUsersTabSearchQuery,
} from "../slices/adminPanelSlice";

import FilterSelector from "./FilterSelector";
import { StyledAdminPanelFilters } from "../styles/AdminPanelFilters.styled";

export default function UsersFilters() {
  const rolesOptions = [
    "Admin",
    "Edytor",
    "Twórca",
    "Zweryfikowany",
    "Niezweryfikowany",
    "Dowolna",
  ];

  const roleFilter = useSelector(selectRoleFilter);
  const searchQuery = useSelector(selectUsersTabSearchQuery);

  const dispatch = useDispatch();

  return (
    <StyledAdminPanelFilters>
      <FontAwesomeIcon icon={faFilter} className="icon" />
      <FilterSelector
        selectedFilter={roleFilter}
        setFilter={(filter) => dispatch(setRoleFilter(filter))}
        options={rolesOptions}
      />
      <SearchBar
        view="adminPanel"
        searchQuery={searchQuery}
        setSearchQuery={(query) => dispatch(setUsersTabSearchQuery(query))}
        placeholder="Kogo szukasz?"
      />
    </StyledAdminPanelFilters>
  );
}
