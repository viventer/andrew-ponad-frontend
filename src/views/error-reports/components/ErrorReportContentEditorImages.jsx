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
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
          <div key={index}>
            <button onClick={() => deleteImage(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
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
      <h3>Zrzuty ekranu z błędem</h3>
      {imageDropzones}
      {images.length < 3 && (
        <StyledButton onClick={() => addNewImage()}>Dodaj zdjęcie</StyledButton>
      )}
    </StyledErrorReportContentEditorImages>
  );
}
