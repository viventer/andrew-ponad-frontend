import { StyledThumbnailBar } from "../styles/ThumbnailBar.styled";

export default function ThumbnailBar({ fileUrl }) {
  const images = [];
  for (let i = 0; i < 3; i++) {
    images.push(
      <img
        key={i}
        src={fileUrl}
        onLoad={() => {
          URL.revokeObjectURL(fileUrl);
        }}
      />
    );
  }

  return (
    <StyledThumbnailBar className="flex flex-center">
      {images}
    </StyledThumbnailBar>
  );
}
