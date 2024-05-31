import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchange } from "@fortawesome/free-solid-svg-icons";

import { setErrMsg } from "../slices/globalStatesSlice";
import { setThumbnailPreview } from "../../post/slices/postSlice";

import { StyledImageDropzone } from "../../post/styles/ImageDropzone.styled";

export default function ImageDropzone({
  imagePreview,
  setImagePreview,
  isThumbnail,
}) {
  const dispatch = useDispatch();

  let url;

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    maxSize: 1048576,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles) dispatch(setErrMsg(""));
      url = URL.createObjectURL(acceptedFiles[0]);
      const file = new FileReader();
      file.onload = () => {
        if (isThumbnail) {
          dispatch(setThumbnailPreview(file.result));
        } else {
          setImagePreview(file.result);
        }
      };

      file.readAsDataURL(acceptedFiles[0]);
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
    return () => URL.revokeObjectURL(imagePreview);
  }, []);

  return (
    <StyledImageDropzone
      {...getRootProps()}
      $isabsolute={isThumbnail ? 1 : 0}
      className="imageDropzone responsivePostElement"
    >
      <input {...getInputProps()} />
      <div className="hover-effect">
        <FontAwesomeIcon icon={faExchange} className="change-icon" />
        <p className="change-paragraph">Zmień zdjęcie</p>
      </div>
    </StyledImageDropzone>
  );
}
