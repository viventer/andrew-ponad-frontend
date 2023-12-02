import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import ErrorWindow from "../../global/components/ErrorWindow";

import { useEffect, useState } from "react";
import PostContentEditor from "./PostContentEditor";

export default function PostEditor() {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [postRows, setPostRows] = useState([]);

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }, [errorMessage]);

  return (
    <>
      <StyledPostEditor>
        {thumbnailUrl && <ThumbnailBar thumbnailUrl={thumbnailUrl} />}
        <ImageDropzone
          isThumbnail={true}
          imageUrl={thumbnailUrl}
          setImageUrl={setThumbnailUrl}
          setErrorMessage={setErrorMessage}
        />
        <div className="input">
          <PostTitleInput
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            setErrorMessage={setErrorMessage}
          />
        </div>
        <PostContentEditor
          setErrorMessage={setErrorMessage}
          postRows={postRows}
          setPostRows={setPostRows}
        />
      </StyledPostEditor>
      <div style={{ opacity: errorMessage ? 1 : 0 }} className="transition">
        <ErrorWindow message={errorMessage} />
      </div>
    </>
  );
}
