import { useDropzone } from "react-dropzone";

import { StyledImageDropzone } from "../styles/PostEditor.styled";

export default function ImageDropzone() {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
  });

  return (
    <StyledImageDropzone {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Przeciągnij obraz tutaj lub kliknij aby wybrać</p>
    </StyledImageDropzone>
  );
}
