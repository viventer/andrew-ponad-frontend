import { useSelector } from "react-redux";
import { StyledThumbnailBar } from "../styles/ThumbnailBar.styled";
import { selectThumbnailUrl } from "../slices/postSlice";

import thumbnailPlaceholder from "../image/thumbnailPlaceholder.jpg";

export default function ThumbnailBar() {
  const thumbnailUrl = useSelector(selectThumbnailUrl);

  const images = [];
  for (let i = 0; i < 3; i++) {
    images.push(
      <img
        key={i}
        src={thumbnailUrl || thumbnailPlaceholder}
        onLoad={() => {
          URL.revokeObjectURL(thumbnailUrl);
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
