import PostsFilters from "./PostsFilters";
import PostsList from "./PostsList";
import AddPostButton from "./AddPostButton";
import { StyledAdminPanelTab } from "../styles/AdminPanelTab.styled";

export default function PostsTab() {
  return (
    <StyledAdminPanelTab>
      <div className="flex">
        <PostsFilters />
        <AddPostButton />
      </div>
      <PostsList />
    </StyledAdminPanelTab>
  );
}
