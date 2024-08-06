import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  setIsErrorReportVisible,
  setIsSearchBoxVisible,
  setIsUserInfoVisible,
} from "../../global/slices/globalStatesSlice";

import PostsSearchBox from "./PostsSearchBox";
import SearchBar from "../../global/components/SearchBar";
import { StyledPostsSearch } from "../styles/PostsSearch.styled";

export default function PostsSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  return (
    <StyledPostsSearch
      onFocus={() => {
        dispatch(setIsSearchBoxVisible(true));
        dispatch(setIsUserInfoVisible(false));
        dispatch(setIsErrorReportVisible(false));
      }}
    >
      <SearchBar
        placeholder="Czego szukasz?"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <PostsSearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Czego szukasz?"
      />
    </StyledPostsSearch>
  );
}
