import { useState } from "react";
import { StyledPostsSearch } from "../styles/PostsSearch.styled";
import SearchBar from "../../global/components/SearchBar";
import PostsSearchBox from "./PostsSearchBox";
import { useDispatch } from "react-redux";
import { setIsSearchBoxVisible } from "../../global/slices/globalStatesSlice";

export default function PostsSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  return (
    <StyledPostsSearch onFocus={() => dispatch(setIsSearchBoxVisible(true))}>
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
