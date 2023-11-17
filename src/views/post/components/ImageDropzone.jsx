import { useDropzone } from "react-dropzone";

import { StyledImageDropzone } from "../styles/PostEditor.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ErrorWindow from "../../global/components/ErrorWindow";

export default function ImageDropzone({ fileUrl, setFileUrl }) {
  const [uploadError, setUploadError] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 2,
    maxSize: 1048576,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles) setUploadError("");
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    onError: (error) => {
      setUploadError(
        "Plik został odrzucony. Pamiętaj, że rozmiar nie może przekraczać 1MB"
      );
    },
  });

  useEffect(() => {
    return () => URL.revokeObjectURL(fileUrl);
  }, []);

  return (
    <div className="flex flex-column flex-center">
      <StyledImageDropzone {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Przeciągnij obraz tutaj lub kliknij aby wybrać</p>
        <FontAwesomeIcon icon={faUpload} className="icon" />
      </StyledImageDropzone>
      {uploadError && <ErrorWindow message={uploadError} />}
    </div>
  );
}
