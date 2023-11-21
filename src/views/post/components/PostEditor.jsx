import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";

import { useState } from "react";

export default function PostEditor() {
  const [fileUrl, setFileUrl] = useState(null);
  const [postTitle, setPostTitle] = useState("");

  return (
    <StyledPostEditor>
      {fileUrl && <ThumbnailBar fileUrl={fileUrl} />}
      <section>
        <ImageDropzone fileUrl={fileUrl} setFileUrl={setFileUrl} />
        <PostTitleInput postTitle={postTitle} />
      </section>
    </StyledPostEditor>
  );
}
