import { useState } from "react";
import { StyledPostsSearchBox } from "../styles/PostsSearchBox.styled";
import CategorySelector from "./CategorySelector";
import PostsSearchResults from "./PostsSearchResults";
import { StyledButton } from "../../global/styles/Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function PostsSearchBox({
  searchQuery,
  setShowSearchBox,
  showSearchBox,
}) {
  const [categoryFilter, setCategoryFilter] = useState("Wybierz kategorię");

  if (showSearchBox)
    return (
      <StyledPostsSearchBox>
        <CategorySelector
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <PostsSearchResults
          categoryFilter={categoryFilter}
          searchQuery={searchQuery}
        />
        <StyledButton
          className="expandButton"
          onClick={() => setShowSearchBox(false)}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </StyledButton>
      </StyledPostsSearchBox>
    );
}
