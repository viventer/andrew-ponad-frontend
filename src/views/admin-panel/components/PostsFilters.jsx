import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import useGetVisibilityOptions from "../../../hooks/useGetVisibilityOptions";

import { selectAvailablePostCategories } from "../../global/slices/globalStatesSlice";
import {
  selectCategoryFilter,
  selectPostsTabSearchQuery,
  selectVisibilityFilter,
  setCategoryFilter,
  setPostsTabSearchQuery,
  setVisibilityFilter,
} from "../slices/adminPanelSlice";

import FilterSelector from "./FilterSelector";
import SearchBar from "../../global/components/SearchBar";
import { StyledAdminPanelFilters } from "../styles/AdminPanelFilters.styled";

export default function PostsFilters() {
  const selectedVisibilityFilter = useSelector(selectVisibilityFilter);
  const selectedCategoryFilter = useSelector(selectCategoryFilter);
  const searchQuery = useSelector(selectPostsTabSearchQuery);

  const dispatch = useDispatch();

  const visibilityOptions = useGetVisibilityOptions();
  const availableCategories = useSelector(selectAvailablePostCategories);
  visibilityOptions.push("Dowolna");
  const categoryOptions = [...availableCategories, "Dowolna"];

  return (
    <StyledAdminPanelFilters>
      <FontAwesomeIcon icon={faFilter} className="icon postsFiltersIcon" />
      <FilterSelector
        selectedFilter={selectedVisibilityFilter}
        setFilter={(filter) => dispatch(setVisibilityFilter(filter))}
        options={visibilityOptions}
      />
      <FilterSelector
        selectedFilter={selectedCategoryFilter}
        setFilter={(filter) => dispatch(setCategoryFilter(filter))}
        options={categoryOptions}
      />
      <SearchBar
        view="adminPanel"
        searchQuery={searchQuery}
        setSearchQuery={(query) => dispatch(setPostsTabSearchQuery(query))}
        placeholder="Czego szukasz?"
      />
    </StyledAdminPanelFilters>
  );
}
