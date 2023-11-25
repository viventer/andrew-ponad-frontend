import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import ErrorWindow from "../../global/components/ErrorWindow";

import { useEffect, useState } from "react";

export default function PostEditor() {
  const [fileUrl, setFileUrl] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
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
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <div className="input">
          <PostTitleInput postTitle={postTitle} />
        </div>
      </StyledPostEditor>
      <div style={{ opacity: isError ? 1 : 0 }} className="transition">
        <ErrorWindow message={errorMessage} />
      </div>
    </>
  );
}
