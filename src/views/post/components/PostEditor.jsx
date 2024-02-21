import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import PostContentEditor from "./PostContentEditor";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPostState,
  selectPostCategory,
  selectPostRows,
  selectPostTitle,
  selectPostVisibility,
  selectThumbnailUrl,
  setPostRows,
} from "../slices/postSlice";
import CategorySelector from "./CategorySelector";
import VisibilitySelector from "./VisibilitySelector";
import { selectCurrentUser, selectUserId } from "../../auth/slices/authSlice";
import { useEffect } from "react";
import { useAddNewPostMutation } from "../slices/postsApiSlice";
import { StyledButton } from "../../global/styles/Button.styled";
import { setIsLoading } from "../../global/slices/globalStatesSlice";

export default function PostEditor() {
  const dispatch = useDispatch();
  const thumbnailUrl = useSelector(selectThumbnailUrl);
  const postRows = useSelector(selectPostRows);
  const postTitle = useSelector(selectPostTitle);
  const postCategory = useSelector(selectPostCategory);
  const postVisiblity = useSelector(selectPostVisibility);
  const userId = useSelector(selectUserId);

  const postData = {
    author: userId,
    title: postTitle,
    thumbnail: thumbnailUrl,
    visibility: postVisiblity,
    content: postRows,
    category: postCategory,
  };

  const isPostContentValid = (postRows) => {
    for (const row of postRows) {
      for (const item of row) {
        if (item.textEditorContent == "" && !item.imageUrl) {
          return false;
        }
      }
    }
    return true;
  };

  const isAllDataExist = Object.values(postData).every(
    (value) => value !== null && value !== undefined
  );

  const canAdd = isPostContentValid(postRows) && isAllDataExist;

  const [addNewPost, { isLoading, isSuccess, isError, error }] =
    useAddNewPostMutation();
  const addPost = async (e, postData) => {
    e.preventDefault();
    await addNewPost(postData);
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <>
      <StyledPostEditor>
        {thumbnailUrl && <ThumbnailBar />}
        <ImageDropzone isThumbnail={true} imageUrl={thumbnailUrl} />
        <div className="thumbnailBarOverlay">
          <PostTitleInput />
          <CategorySelector />
        </div>
        <PostContentEditor />
        <footer>
          <StyledButton
            disabled={!canAdd}
            onClick={(e) => addPost(e, postData)}
          >
            Dodaj posta
          </StyledButton>
          <VisibilitySelector />
        </footer>
      </StyledPostEditor>
    </>
  );
}
