import { useSelector } from "react-redux";
import ImageDropzone from "./ImageDropzone";

import useTranslateVisibility from "../../../hooks/useTranslateVisibility";

import {
  selectPostCategory,
  selectPostRows,
  selectPostTitle,
  selectPostVisibility,
  selectThumbnailPreview,
} from "../slices/postSlice";

import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import CategorySelector from "./CategorySelector";
import PostContentEditor from "./PostContentEditor";
import VisibilitySelector from "./VisibilitySelector";
import { StyledButton } from "../../global/styles/Button.styled";
import { selectUserId } from "../../auth/slices/authSlice";
import { StyledPostEditPage } from "../styles/PostEditPage.styled";

export default function PostEditForm({ handleClick, buttonText }) {
  const thumbnailPreview = useSelector(selectThumbnailPreview);
  const postRows = useSelector(selectPostRows);
  const postTitle = useSelector(selectPostTitle);
  const postCategory = useSelector(selectPostCategory);
  const postVisiblity = useSelector(selectPostVisibility);
  const userId = useSelector(selectUserId);

  const translateVisibility = useTranslateVisibility();

  const translatedVisibility = translateVisibility(postVisiblity, "english");

  const postData = {
    author: userId,
    title: postTitle,
    thumbnail: thumbnailPreview,
    visibility: translatedVisibility,
    content: postRows,
    category: postCategory,
  };

  const isPostContentValid = (postRows) => {
    for (const row of postRows) {
      for (const item of row) {
        if (item.type == "none") continue;
        if (item.textEditorContent == "" && !item.imagePreview) {
          return false;
        }
      }
    }
    return true;
  };

  console.log("postEditForm rerender");

  const isAllDataExist = Object.values(postData).every(
    (value) =>
      value !== null &&
      value !== undefined &&
      value !== "" &&
      !value?.includes("Wybierz")
  );

  const canSave = isPostContentValid(postRows) && isAllDataExist;

  return (
    <StyledPostEditPage>
      <ThumbnailBar />
      <ImageDropzone isThumbnail={true} imagePreview={thumbnailPreview} />
      <div className="thumbnailBarOverlay">
        <PostTitleInput />
        <CategorySelector />
      </div>
      <PostContentEditor />
      <footer>
        <StyledButton disabled={!canSave} onClick={() => handleClick(postData)}>
          {buttonText}
        </StyledButton>
        <VisibilitySelector />
      </footer>
    </StyledPostEditPage>
  );
}
