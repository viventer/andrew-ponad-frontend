import { StyledImageDropzone } from "../styles/ImageDropzone.styled";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchange, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { setErrMsg } from "../../global/slices/globalStatesSlice";
import { setThumbnailUrl } from "../slices/postSlice";

export default function ImageDropzone({ imageUrl, setImageUrl, isThumbnail }) {
  const dispatch = useDispatch();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    maxSize: 1048576,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles) dispatch(setErrMsg(""));
      const url = URL.createObjectURL(acceptedFiles[0]);
      if (isThumbnail) {
        dispatch(setThumbnailUrl(url));
      } else {
        setImageUrl(url);
      }
    },
    onError: () => {
      dispatch(
        setErrMsg(
          "Plik został odrzucony. Pamiętaj, że rozmiar nie może przekraczać 1MB."
        )
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
