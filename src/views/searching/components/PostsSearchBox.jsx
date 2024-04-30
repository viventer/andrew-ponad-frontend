import { useState } from "react";
import { StyledPostsSearchBox } from "../styles/PostsSearchBox.styled";
import CategorySelector from "./CategorySelector";
import PostsSearchResults from "./PostsSearchResults";
import { StyledButton } from "../../global/styles/Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../global/components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSearchBoxVisible,
  setIsSearchBoxVisible,
} from "../../global/slices/globalStatesSlice";

export default function PostsSearchBox({
  searchQuery,
  setSearchQuery,
  placeholder,
}) {
  const [categoryFilter, setCategoryFilter] = useState("Wybierz kategorię");
  const isSearchBoxVisible = useSelector(selectIsSearchBoxVisible);
  const dispatch = useDispatch();

  if (isSearchBoxVisible)
    return (
      <StyledPostsSearchBox>
        <div>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder={placeholder}
            view="searchBox"
          />
          <CategorySelector
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
          <PostsSearchResults
            categoryFilter={categoryFilter}
            searchQuery={searchQuery}
          />
        </div>
        <StyledButton
          className="expandButton"
          onClick={() => dispatch(setIsSearchBoxVisible(false))}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </StyledButton>
      </StyledPostsSearchBox>
    );
}
