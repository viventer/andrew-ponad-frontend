import useTranslateVisibility from "../../../hooks/useTranslateVisibility";
import { StyledSliderPostInfo } from "../../home/styles/SliderElement.styled";

import { StyledElementFromListInfo } from "../styles/ElementFromListInfo.styled";

export default function PostFromListInfo({ postData, view }) {
  const translateVisibility = useTranslateVisibility();
  const translatedVisibility = translateVisibility(
    postData.visibility,
    "polish"
  );

  const creationDate = new Date(postData.createdAt).toLocaleDateString("PL");

  const content = (
    <>
      <p>
        <span>autor: </span>
        {postData.username}
      </p>
      {postData.category != "Wybierz kategorię" && (
        <p>
          <span>kategoria: </span>
          {postData.category}
        </p>
      )}
      <p>
        <span>widoczność: </span>
        {translatedVisibility}
      </p>
      <p>
        <span>wyświetlenia: </span>
        {postData.views}
      </p>
      <p>
        <span>data utworzenia: </span>
        {creationDate}
      </p>
    </>
  );

  return view != "slider" ? (
    <StyledElementFromListInfo className="info">
      {content}
    </StyledElementFromListInfo>
  ) : (
    <StyledSliderPostInfo>{content}</StyledSliderPostInfo>
  );
}
