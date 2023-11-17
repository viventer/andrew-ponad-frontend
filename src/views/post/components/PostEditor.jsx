import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";

import { useState } from "react";

export default function PostEditor() {
  const [fileUrl, setFileUrl] = useState(null);

  return (
    <StyledPostEditor>
      {fileUrl ? (
        <img
          src={fileUrl}
          onLoad={() => {
            URL.revokeObjectURL(fileUrl);
          }}
        />
      ) : (
        <ImageDropzone fileUrl={fileUrl} setFileUrl={setFileUrl} />
      )}
    </StyledPostEditor>
  );
}
