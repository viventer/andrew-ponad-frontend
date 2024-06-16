import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import thumbnailPlaceholder from "../../post/image/thumbnailPlaceholder.jpg";

import {
  addErrorReportImage,
  changeErrorReportImage,
  deleteErrorReportImage,
  selectErrorReportImages,
} from "../slices/errorReportSlice";

import useGetBase64Regex from "../../../hooks/useGetBase64Regex";

import ImageDropzone from "../../global/components/ImageDropzone";
import { StyledErrorReportContentEditorImages } from "../styles/ErrorReportContentEditorImages.styled";
import { StyledButton } from "../../global/styles/Button.styled";

export default function ErrorReportContentEditorImages() {
  const images = useSelector(selectErrorReportImages);

  const dispatch = useDispatch();

  const [imageDropzones, setImageDropzones] = useState([]);
  useEffect(() => {
    setImageDropzones(
      images.map((image, index) => {
        const base64Regex = useGetBase64Regex();
        const isThumbnailCorrect = base64Regex.test(image);

        return (
          <div key={index} className="dropzoneWrapper">
            {!(!isThumbnailCorrect && index == 0) && (
              <button
                onClick={() => deleteImage(index)}
                className="deleteButton"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
            <img src={isThumbnailCorrect ? image : thumbnailPlaceholder} />
            <ImageDropzone
              imagePreview={image}
              setImagePreview={(newUrl) => {
                dispatch(changeErrorReportImage({ index, newUrl }));
                console.log("siema");
              }}
              view="errorReport"
            />
          </div>
        );
      })
    );
  }, [images]);

  const addNewImage = () => {
    dispatch(addErrorReportImage(thumbnailPlaceholder));
  };

  const deleteImage = (index) => {
    if (index != 0) {
      dispatch(deleteErrorReportImage(index));
    } else {
      dispatch(changeErrorReportImage({ index, newUrl: thumbnailPlaceholder }));
    }
  };

  return (
    <StyledErrorReportContentEditorImages>
      <h3>Dodaj zrzuty ekranu z błędem</h3>
      {imageDropzones}
      {images.length < 3 && (
        <StyledButton onClick={() => addNewImage()} className="addButton">
          <FontAwesomeIcon icon={faPlus} />
          Dodaj zdjęcie
        </StyledButton>
      )}
    </StyledErrorReportContentEditorImages>
  );
}
