import { StyledImageDropzone } from "../styles/ImageDropzone.styled";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchange, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";

export default function ImageDropzone({
  imageUrl,
  setImageUrl,
  setErrorMessage,
  isThumbnail,
}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    maxSize: 1048576,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles) setErrorMessage("");
      setImageUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    onError: () => {
      console.log(setErrorMessage);
      setErrorMessage(
        "Plik został odrzucony. Pamiętaj, że rozmiar nie może przekraczać 1MB."
      );
    },
  });

  useEffect(() => {
    return () => URL.revokeObjectURL(imageUrl);
  }, []);

  return (
    <StyledImageDropzone
      {...getRootProps()}
      $isabsolute={imageUrl && isThumbnail ? 1 : 0}
      className="imageDropzone responsivePostElement"
    >
      <input {...getInputProps()} />
      {!imageUrl ? (
        <div>
          <p>Przeciągnij obraz tutaj lub kliknij aby wybrać</p>
          <FontAwesomeIcon icon={faUpload} className="icon" />
        </div>
      ) : (
        <div className="hover-effect">
          <FontAwesomeIcon icon={faExchange} className="change-icon" />
          <p className="change-paragraph">Zmień zdjęcie</p>
        </div>
      )}
    </StyledImageDropzone>
  );
}
