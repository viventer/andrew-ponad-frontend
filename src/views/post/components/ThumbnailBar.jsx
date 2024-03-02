import { useSelector } from "react-redux";
import { StyledThumbnailBar } from "../styles/ThumbnailBar.styled";
import { selectThumbnailPreview } from "../slices/postSlice";

import thumbnailPlaceholder from "../image/thumbnailPlaceholder.jpg";

export default function ThumbnailBar() {
  const thumbnailPreview = useSelector(selectThumbnailPreview);

  const images = [];
  for (let i = 0; i < 3; i++) {
    images.push(
      <img
        key={i}
        src={thumbnailPreview || thumbnailPlaceholder}
        onLoad={() => {
          URL.revokeObjectURL(thumbnailPreview);
        }}
        className={i == 1 ? "responsivePostElement" : ""}
      />
    );
  }

  return (
    <StyledThumbnailBar className="flex flex-center">
      {images}
    </StyledThumbnailBar>
  );
}
