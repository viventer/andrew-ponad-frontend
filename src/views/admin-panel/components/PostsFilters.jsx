import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledAdminPanelFilters } from "../styles/AdminPanelFilters.styled";
import FilterSelector from "./FilterSelector";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import useGetVisibilityOptions from "../../../hooks/useGetVisibilityOptions";
import { useSelector } from "react-redux";
import { selectAvailablePostCategories } from "../../global/slices/globalStatesSlice";
import SearchBar from "../../global/components/SearchBar";

export default function PostsFilters({
  selectedVisibilityFilter,
  setSelectedVisibilityFilter,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
  searchQuery,
  setSearchQuery,
}) {
  const visibilityOptions = useGetVisibilityOptions();
  const availableCategories = useSelector(selectAvailablePostCategories);
  visibilityOptions.push("Dowolna");
  const categoryOptions = [...availableCategories, "Dowolna"];

  return (
    <StyledAdminPanelFilters>
      <FontAwesomeIcon icon={faFilter} className="icon postsFiltersIcon" />
      <FilterSelector
        selectedFilter={selectedVisibilityFilter}
        setFilter={setSelectedVisibilityFilter}
        options={visibilityOptions}
      />
      <FilterSelector
        selectedFilter={selectedCategoryFilter}
        setFilter={setSelectedCategoryFilter}
        options={categoryOptions}
      />
      <SearchBar
        view="adminPanel"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Czego szukasz?"
      />
    </StyledAdminPanelFilters>
  );
}
