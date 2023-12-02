import { StyledThumbnailBar } from "../styles/ThumbnailBar.styled";

export default function ThumbnailBar({ thumbnailUrl }) {
  const images = [];
  for (let i = 0; i < 3; i++) {
    images.push(
      <img
        key={i}
        src={thumbnailUrl}
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
