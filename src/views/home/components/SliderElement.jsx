import { useNavigate } from "react-router-dom";

import thumbnailPlaceholder from "../../post/images/thumbnailPlaceholder.jpg";

import PostFromListInfo from "../../global/components/PostFromListInfo";
import { StyledSliderElement } from "../styles/SliderElement.styled";
import useIsThumbnailUrlCorrect from "../../../hooks/useIsThumbnailUrlCorrect";

export default function SliderElement({
  postData,
  index,
  visibleElementsIndexes,
}) {
  const isThumbnailUrlCorrect = useIsThumbnailUrlCorrect();
  const isThumbnailCorrect = isThumbnailUrlCorrect(postData.thumbnail);
  const thumbnailUrl = isThumbnailCorrect
    ? postData.thumbnail
    : thumbnailPlaceholder;

  const isVisible = visibleElementsIndexes.includes(index);
  let visibleElementClassName;
  if (isVisible) {
    const order = visibleElementsIndexes.indexOf(index);
    visibleElementClassName = "sliderElement" + order.toString();
  }

  const navigate = useNavigate();

  return (
    <StyledSliderElement
      className={isVisible ? visibleElementClassName : "hide"}
      onClick={() => navigate(`/post/${postData._id}`)}
    >
      <img src={thumbnailUrl} />
      <div>
        <h3>{postData.title}</h3>
      </div>
      <PostFromListInfo postData={postData} view="slider" />
    </StyledSliderElement>
  );
}
