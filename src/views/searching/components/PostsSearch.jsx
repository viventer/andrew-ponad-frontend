import { useState } from "react";
import { StyledPostsSearch } from "../styles/PostsSearch.styled";
import SearchBar from "../../global/components/SearchBar";
import PostsSearchBox from "./PostsSearchBox";

export default function PostsSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <StyledPostsSearch onFocus={() => setShowSearchBox(true)}>
      <SearchBar
        placeholder="Czego szukasz?"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <PostsSearchBox
        searchQuery={searchQuery}
        setShowSearchBox={setShowSearchBox}
        showSearchBox={showSearchBox}
      />
    </StyledPostsSearch>
  );
}
