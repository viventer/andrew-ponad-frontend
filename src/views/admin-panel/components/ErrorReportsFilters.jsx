import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import useGetErrorReportsStatusOptions from "../../../hooks/useGetErrorReportsStatusOptions";

import {
  selectErrorReportsTabSearchQuery,
  selectStatusFilter,
  setErrorReportsTabSearchQuery,
  setStatusFilter,
} from "../slices/adminPanelSlice";

import FilterSelector from "./FilterSelector";
import SearchBar from "../../global/components/SearchBar";
import { StyledAdminPanelFilters } from "../styles/AdminPanelFilters.styled";

export default function ErrorReportsFilters() {
  const selectedStatusFilter = useSelector(selectStatusFilter);
  const searchQuery = useSelector(selectErrorReportsTabSearchQuery);

  const dispatch = useDispatch();

  const statusOptions = useGetErrorReportsStatusOptions();
  statusOptions.push("Dowolny");

  return (
    <StyledAdminPanelFilters>
      <FontAwesomeIcon
        icon={faFilter}
        className="icon errorReportsFiltersIcon"
      />
      <FilterSelector
        selectedFilter={selectedStatusFilter}
        setFilter={(filter) => dispatch(setStatusFilter(filter))}
        options={statusOptions}
      />
      <SearchBar
        view="adminPanel"
        searchQuery={searchQuery}
        setSearchQuery={(query) =>
          dispatch(setErrorReportsTabSearchQuery(query))
        }
        placeholder="Czego szukasz?"
      />
    </StyledAdminPanelFilters>
  );
}
