import { StyledSliderElement } from "../styles/SliderElement.styled";
import thumbnailPlaceholder from "../../post/image/thumbnailPlaceholder.jpg";
import PostFromListInfo from "../../global/components/PostFromListInfo";

export default function SliderElement({ postData, index }) {
  const base64Regex = /^data:image\/[^;]+;base64,/;
  const isThumbnailCorrect = base64Regex.test(postData.thumbnail);
  const thumbnailUrl = isThumbnailCorrect
    ? postData.thumbnail
    : thumbnailPlaceholder;

  return (
    <StyledSliderElement>
      <img src={thumbnailUrl} />
      <h3>{postData.title}</h3>
      <PostFromListInfo postData={postData} view="slider" />
    </StyledSliderElement>
  );
}
