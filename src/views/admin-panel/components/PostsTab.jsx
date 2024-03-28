import { StyledPostsTab } from "../styles/PostsTab.styled";
import { useState } from "react";
import PostsFilters from "./PostsFilters";
import PostsList from "./PostsList";

export default function PostsTab() {
  const [selectedVisibilityFilter, setSelectedVisibilityFilter] =
    useState("Widoczność");

  const [selectedCategoryFilter, setSelectedCategoryFilter] =
    useState("Kategoria");

  return (
    <StyledPostsTab>
      <PostsFilters
        selectedVisibilityFilter={selectedVisibilityFilter}
        setSelectedVisibilityFilter={setSelectedVisibilityFilter}
        selectedCategoryFilter={selectedCategoryFilter}
        setSelectedCategoryFilter={setSelectedCategoryFilter}
      />
      <PostsList />
    </StyledPostsTab>
  );
}
