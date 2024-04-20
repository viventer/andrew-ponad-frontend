import PostsFilters from "./PostsFilters";
import PostsList from "./PostsList";
import AddPostButton from "./AddPostButton";
import { StyledPostsTab } from "../styles/PostsTab.styled";

export default function PostsTab() {
  return (
    <StyledPostsTab>
      <div className="flex">
        <PostsFilters />
        <AddPostButton />
      </div>
      <PostsList />
    </StyledPostsTab>
  );
}
