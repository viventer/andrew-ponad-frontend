import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";

export default function PostEditor() {
  return (
    <StyledPostEditor>
      <ImageDropzone />
    </StyledPostEditor>
  );
}
