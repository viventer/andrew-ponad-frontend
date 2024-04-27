import { useState } from "react";
import { StyledPostsSearchBox } from "../styles/PostsSearchBox.styled";
import CategorySelector from "./CategorySelector";
import PostsSearchResults from "./PostsSearchResults";

export default function PostsSearchBox() {
  const [categoryFilter, setCategoryFilter] = useState("Wybierz kategorię");

  return (
    <StyledPostsSearchBox>
      <CategorySelector
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <PostsSearchResults />
    </StyledPostsSearchBox>
  );
}
