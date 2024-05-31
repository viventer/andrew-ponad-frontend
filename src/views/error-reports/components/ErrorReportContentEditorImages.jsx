import { useSelector } from "react-redux";
import ImageDropzone from "../../global/components/ImageDropzone";
import { selectErrorReportImages } from "../slices/errorReportSlice";
import { StyledErrorReportContentEditorImages } from "../styles/ErrorReportContentEditorImages.styled";

export default function ErrorReportContentEditorImages() {
  const images = useSelector(selectErrorReportImages);

  // const imageDropzones = images.map((image, index) => <ImageDropzone imagePreview={image} setImagePreview={}/>)

  return (
    <StyledErrorReportContentEditorImages>
      <ImageDropzone />
    </StyledErrorReportContentEditorImages>
  );
}
