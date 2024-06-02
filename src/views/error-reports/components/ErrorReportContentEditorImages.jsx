import { useDispatch, useSelector } from "react-redux";
import ImageDropzone from "../../global/components/ImageDropzone";
import {
  addErrorReportImage,
  changeErrorReportImage,
  deleteErrorReportImage,
  selectErrorReportImages,
} from "../slices/errorReportSlice";
import { StyledErrorReportContentEditorImages } from "../styles/ErrorReportContentEditorImages.styled";
import thumbnailPlaceholder from "../../post/image/thumbnailPlaceholder.jpg";
import { useEffect, useState } from "react";
import { StyledButton } from "../../global/styles/Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faPlus,
  faPlusCircle,
  faSquarePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function ErrorReportContentEditorImages() {
  const images = useSelector(selectErrorReportImages);

  const dispatch = useDispatch();

  const [imageDropzones, setImageDropzones] = useState([]);
  useEffect(() => {
    setImageDropzones(
      images.map((image, index) => {
        const base64Regex = /^data:image\/[^;]+;base64,/;
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
            <img
              src={isThumbnailCorrect ? image : thumbnailPlaceholder}
              alt=""
            />
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
    console.log(images);
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
