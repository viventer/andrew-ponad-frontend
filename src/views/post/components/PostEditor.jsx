import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";

import { useState } from "react";

export default function PostEditor() {
  const [fileUrl, setFileUrl] = useState(null);

  return (
    <StyledPostEditor>
      {fileUrl && <ThumbnailBar fileUrl={fileUrl} canEdit={true} />}
      <ImageDropzone fileUrl={fileUrl} setFileUrl={setFileUrl} />
    </StyledPostEditor>
  );
}
