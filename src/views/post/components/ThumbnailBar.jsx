import { StyledThumbnailBar } from "../styles/Post.styled";

export default function ThumbnailBar({ fileUrl, canEdit }) {
  return (
    <StyledThumbnailBar className="flex flex-center">
      <img
        src={fileUrl}
        onLoad={() => {
          URL.revokeObjectURL(fileUrl);
        }}
      />
      <img
        src={fileUrl}
        onLoad={() => {
          URL.revokeObjectURL(fileUrl);
        }}
      />
      <img
        src={fileUrl}
        onLoad={() => {
          URL.revokeObjectURL(fileUrl);
        }}
      />
    </StyledThumbnailBar>
  );
}
