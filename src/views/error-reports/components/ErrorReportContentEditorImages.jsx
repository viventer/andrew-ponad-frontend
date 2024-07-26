import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import thumbnailPlaceholder from "../../post/images/thumbnailPlaceholder.jpg";

import {
  addErrorReportImage,
  changeErrorReportImage,
  deleteErrorReportImage,
  selectErrorReportImages,
} from "../slices/errorReportSlice";

import ImageDropzone from "../../global/components/ImageDropzone";
import { StyledErrorReportContentEditorImages } from "../styles/ErrorReportContentEditorImages.styled";
import { StyledButton } from "../../global/styles/Button.styled";
import useIsThumbnailUrlCorrect from "../../../hooks/useIsThumbnailUrlCorrect";

export default function ErrorReportContentEditorImages() {
  const images = useSelector(selectErrorReportImages);

  const dispatch = useDispatch();

  const isThumbnailUrlCorrect = useIsThumbnailUrlCorrect();

  const [imageDropzones, setImageDropzones] = useState([]);
  useEffect(() => {
    setImageDropzones(
      images.map((image, index) => {
        const isThumbnailCorrect = isThumbnailUrlCorrect(image);

        return (
          <div key={index} className="dropzoneWrapper">
            {!(!isThumbnailCorrect && index == 0) && (
              <button
                onClick={() => deleteImage(index)}
                className="deleteImgButton"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
            <img src={isThumbnailCorrect ? image : thumbnailPlaceholder} />
            <ImageDropzone
              imagePreview={image}
              setImagePreview={(newUrl) => {
                dispatch(changeErrorReportImage({ index, newUrl }));
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
