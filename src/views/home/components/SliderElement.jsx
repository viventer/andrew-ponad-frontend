import { StyledSliderElement } from "../styles/SliderElement.styled";
import thumbnailPlaceholder from "../../post/image/thumbnailPlaceholder.jpg";
import PostFromListInfo from "../../global/components/PostFromListInfo";

export default function SliderElement({
  postData,
  index,
  visibleElementsIndexes,
}) {
  const base64Regex = /^data:image\/[^;]+;base64,/;
  const isThumbnailCorrect = base64Regex.test(postData.thumbnail);
  const thumbnailUrl = isThumbnailCorrect
    ? postData.thumbnail
    : thumbnailPlaceholder;

  const isVisible = visibleElementsIndexes.includes(index);
  let visibleElementClassName;
  if (isVisible) {
    const order = visibleElementsIndexes.indexOf(index);
    visibleElementClassName = "sliderElement" + order.toString();
  }

  return (
    <StyledSliderElement
      className={isVisible ? visibleElementClassName : "hide"}
    >
      <img src={thumbnailUrl} />
      {/* <h3>{postData.title}</h3> */}
      <PostFromListInfo postData={postData} view="slider" />
    </StyledSliderElement>
  );
}
