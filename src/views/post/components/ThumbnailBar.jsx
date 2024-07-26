import { useSelector } from "react-redux";

import { selectThumbnailPreview } from "../slices/postSlice";

import thumbnailPlaceholder from "../images/thumbnailPlaceholder.jpg";

import { StyledThumbnailBar } from "../styles/ThumbnailBar.styled";

export default function ThumbnailBar({ thumbnailFile, view }) {
  const thumbnailPreview =
    view == "edit" && useSelector(selectThumbnailPreview);

  const images = [];
  for (let i = 0; i < 3; i++) {
    images.push(
      <img
        key={i}
        src={thumbnailFile || thumbnailPreview || thumbnailPlaceholder}
        onLoad={() => {
          URL.revokeObjectURL(thumbnailPreview);
          URL.revokeObjectURL(thumbnailFile);
        }}
        className={i == 1 ? "responsivePostElement" : ""}
      />
    );
  }

  return (
    <StyledThumbnailBar
      className={`flex flex-center ${view == "edit" ? "edit" : ""}`}
    >
      {images}
    </StyledThumbnailBar>
  );
}
