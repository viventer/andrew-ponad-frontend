import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import {
  selectIsSearchBoxVisible,
  setIsSearchBoxVisible,
} from "../../global/slices/globalStatesSlice";

import SearchBar from "../../global/components/SearchBar";
import PostsSearchCategorySelector from "./PostsSearchCategorySelector";
import PostsSearchResults from "./PostsSearchResults";
import { StyledPostsSearchBox } from "../styles/PostsSearchBox.styled";
import { StyledButton } from "../../global/styles/Button.styled";

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

export default function PostsSearchBox({
  searchQuery,
  setSearchQuery,
  placeholder,
}: Props) {
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
          <PostsSearchCategorySelector
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
          <PostsSearchResults
            categoryFilter={categoryFilter}
            searchQuery={searchQuery}
          />
        </div>
        <StyledButton
          className="collapseButton"
          onClick={() => dispatch(setIsSearchBoxVisible(false))}
          data-test="collapseButton"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </StyledButton>
      </StyledPostsSearchBox>
    );
}
