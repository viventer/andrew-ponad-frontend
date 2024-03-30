import { StyledPostsTab } from "../styles/PostsTab.styled";
import { useState } from "react";
import PostsFilters from "./PostsFilters";
import PostsList from "./PostsList";
import AddPostButton from "./AddPostButton";

export default function PostsTab() {
  const [selectedVisibilityFilter, setSelectedVisibilityFilter] =
    useState("Widoczność");

  const [selectedCategoryFilter, setSelectedCategoryFilter] =
    useState("Kategoria");

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StyledPostsTab>
      <div className="flex">
        <PostsFilters
          selectedVisibilityFilter={selectedVisibilityFilter}
          setSelectedVisibilityFilter={setSelectedVisibilityFilter}
          selectedCategoryFilter={selectedCategoryFilter}
          setSelectedCategoryFilter={setSelectedCategoryFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <AddPostButton />
      </div>
      <PostsList
        categoryFilter={selectedCategoryFilter}
        visibilityFilter={selectedVisibilityFilter}
        searchQuery={searchQuery}
      />
    </StyledPostsTab>
  );
}
