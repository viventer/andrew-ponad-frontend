import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslateVisibility from "../../../hooks/useTranslateVisibility";
import { StyledSliderPostInfo } from "../../home/styles/SliderPostInfo.styled";

import { StyledElementFromListInfo } from "../styles/ElementFromListInfo.styled";
import {
  faBinoculars,
  faCalendar,
  faCompass,
  faEye,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { PostType } from "../../post/types/post.types";

type Props = { postData: PostType; view?: string };

export default function PostFromListInfo({ postData, view }: Props) {
  const translateVisibility = useTranslateVisibility();
  const translatedVisibility = translateVisibility(
    postData.visibility,
    "polish"
  );

  const creationDate = new Date(postData.createdAt).toLocaleDateString("PL");

  const content = (
    <>
      {postData?.categoryName && view != "slider" && (
        <p>
          <FontAwesomeIcon icon={faCompass} className="icon" />
          <span>kategoria: </span>
          {postData.categoryName}
        </p>
      )}
      <p>
        <FontAwesomeIcon icon={faUser} className="icon" />
        <span>autor: </span>
        {postData.username}
      </p>
      <p>
        <FontAwesomeIcon icon={faEye} className="icon" />
        <span>wyświetlenia: </span>
        {postData.views}
      </p>
      {view != "slider" && (
        <p>
          <FontAwesomeIcon icon={faCalendar} className="icon" />
          <span>data utworzenia: </span>
          {creationDate}
        </p>
      )}
      {view != "slider" && (
        <p>
          <FontAwesomeIcon icon={faBinoculars} className="icon" />
          <span>widoczność: </span>
          {translatedVisibility}
        </p>
      )}
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
