import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import PostContentEditor from "./PostContentEditor";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostRows,
  selectPostTitle,
  selectThumbnailUrl,
  setPostRows,
} from "../slices/postSlice";
import CategorySelector from "./CategorySelector";
import VisibilitySelector from "./VisibilitySelector";

export default function PostEditor() {
  const thumbnailUrl = useSelector(selectThumbnailUrl);
  const postRows = useSelector(selectPostRows);
  const postTitle = useSelector(selectPostTitle);

  const postContent = {
    thumbnailUrl: thumbnailUrl,
    postRows: postRows,
    postTitle: postTitle,
  };

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
          <button onClick={() => console.log(postContent)}>Dodaj posta</button>
          <VisibilitySelector />
        </footer>
      </StyledPostEditor>
    </>
  );
}
