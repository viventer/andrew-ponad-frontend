import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledPostsTab } from "../styles/PostsTab.styled";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import VisibilityFilterSelector from "./VisibilityFilterSelector";
import PostsFilters from "./PostsFilters";

export default function PostsTab() {
  const [selectedVisibilityFilter, setSelectedVisibilityFilter] =
    useState("Widoczność");

  return (
    <StyledPostsTab>
      <PostsFilters
        selectedVisibilityFilter={selectedVisibilityFilter}
        setSelectedVisibilityFilter={setSelectedVisibilityFilter}
      />
    </StyledPostsTab>
  );
}
