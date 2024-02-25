import { StyledPostEditPage } from "../styles/PostEditPage.styled";
import ThumbnailBar from "./ThumbnailBar";
import ImageDropzone from "./ImageDropzone";
import PostTitleInput from "./PostTitleInput";
import CategorySelector from "./CategorySelector";
import PostContentEditor from "./PostContentEditor";
import { StyledButton } from "../../global/styles/Button.styled";
import VisibilitySelector from "./VisibilitySelector";
import {
  selectPostCategory,
  selectPostRows,
  selectPostTitle,
  selectPostVisibility,
  selectThumbnailUrl,
} from "../slices/postSlice";
import { useSelector } from "react-redux";
import { selectUserId } from "../../auth/slices/authSlice";

export default function PostEditForm({ handleClick, buttonText }) {
  const thumbnailUrl = useSelector(selectThumbnailUrl);
  const postRows = useSelector(selectPostRows);
  const postTitle = useSelector(selectPostTitle);
  const postCategory = useSelector(selectPostCategory);
  const postVisiblity = useSelector(selectPostVisibility);
  const userId = useSelector(selectUserId);

  let translatedVisibility;
  switch (postVisiblity) {
    case "Publiczny":
      translatedVisibility = "public";
      break;
    case "Prywatny":
      translatedVisibility = "private";
      break;
    case "Niepubliczny":
      translatedVisibility = "unlisted";
      break;
    case "Szkic":
      translatedVisibility = "draft";
      break;
    case "Dla zweryfikowanych":
      translatedVisibility = "verifiedOnly";
      break;
  }

  const postData = {
    author: userId,
    title: postTitle,
    thumbnail: thumbnailUrl,
    visibility: translatedVisibility,
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
      <ImageDropzone isThumbnail={true} imageUrl={thumbnailUrl} />
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
