import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import ErrorWindow from "../../global/components/ErrorWindow";

import { useEffect, useState } from "react";
import PostContentEditor from "./PostContentEditor";

export default function PostEditor() {
  const [fileUrl, setFileUrl] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        {fileUrl && <ThumbnailBar fileUrl={fileUrl} />}
        <ImageDropzone
          fileUrl={fileUrl}
          setFileUrl={setFileUrl}
          setErrorMessage={setErrorMessage}
        />
        <div className="input">
          <PostTitleInput
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            setErrorMessage={setErrorMessage}
          />
        </div>
        <PostContentEditor />
      </StyledPostEditor>
      <div style={{ opacity: errorMessage ? 1 : 0 }} className="transition">
        <ErrorWindow message={errorMessage} />
      </div>
    </>
  );
}
