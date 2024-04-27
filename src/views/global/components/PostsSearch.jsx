import { useState } from "react";
import { StyledPostsSearch } from "../styles/PostsSearch.styled";
import SearchBar from "./SearchBar";
import PostsSearchBox from "./PostsSearchBox";

export default function PostsSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StyledPostsSearch>
      <SearchBar
        placeholder="Czego szukasz?"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <PostsSearchBox />
    </StyledPostsSearch>
  );
}
