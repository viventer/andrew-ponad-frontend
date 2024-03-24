import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledPostsFilters } from "../styles/PostsFilters.styled";
import VisibilityFilterSelector from "./VisibilityFilterSelector";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function PostsFilters({
  selectedVisibilityFilter,
  setSelectedVisibilityFilter,
}) {
  return (
    <StyledPostsFilters>
      <FontAwesomeIcon icon={faFilter} />
      <VisibilityFilterSelector
        selectedVisibilityFilter={selectedVisibilityFilter}
        setSelectedVisibilityFilter={setSelectedVisibilityFilter}
      />
    </StyledPostsFilters>
  );
}
