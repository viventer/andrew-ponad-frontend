import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledPostsFilters } from "../styles/PostsFilters.styled";
import FilterSelector from "./FilterSelector";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import useGetVisibilityOptions from "../../../hooks/useGetVisibilityOptions";
import { useSelector } from "react-redux";
import { selectAvailablePostCategories } from "../../global/slices/globalStatesSlice";

export default function PostsFilters({
  selectedVisibilityFilter,
  setSelectedVisibilityFilter,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
}) {
  const visibilityOptions = useGetVisibilityOptions();
  const availableCategories = useSelector(selectAvailablePostCategories);

  return (
    <StyledPostsFilters>
      <FontAwesomeIcon icon={faFilter} />
      <FilterSelector
        selectedFilter={selectedVisibilityFilter}
        setFilter={setSelectedVisibilityFilter}
        options={visibilityOptions}
      />
      <FilterSelector
        selectedFilter={selectedCategoryFilter}
        setFilter={setSelectedCategoryFilter}
        options={availableCategories}
      />
    </StyledPostsFilters>
  );
}
