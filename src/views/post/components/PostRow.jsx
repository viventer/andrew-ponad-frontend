import { useDispatch } from "react-redux";

import DOMPurify from "dompurify";
import ReactPlayer from "react-player";
import Zoom from "react-medium-image-zoom";

import { setErrMsg } from "../../global/slices/globalStatesSlice";

import { StyledPostRow } from "../styles/PostRow.styled";

export default function PostRow({ rowData }) {
  const firstElementType = rowData[0].type;
  const secondElementType = rowData[1].type;
  const elementsTypes = [firstElementType, secondElementType];
  const dispatch = useDispatch();

  const elements = elementsTypes.map((type, i) => {
    switch (type) {
      case "textEditor":
        const sanitizedHTML = DOMPurify.sanitize(rowData[i].textEditorContent);
        return (
          <article
            key={i}
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            className="responsivePostElement"
          ></article>
        );

      case "image":
        return (
          <Zoom key={i}>
            <img
              src={rowData[i].imagePreview}
              className="responsivePostElement"
            />
          </Zoom>
        );

      case "video":
        return (
          <div className="responsivePostElement reactPlayerWrapper">
            <ReactPlayer
              url={rowData[i].videoUrl}
              controls={true}
              light={true}
              onError={() =>
                dispatch(setErrMsg("Nie udało się załadować filmu."))
              }
              className="reactPlayer"
            />
          </div>
        );

      default:
        return null;
    }
  });

  let isOnlyOneElement;
  if (firstElementType == "none" || secondElementType == "none") {
    isOnlyOneElement = true;
  }

  return (
    <StyledPostRow className={isOnlyOneElement ? "onlyOneElement " : ""}>
      {elements}
    </StyledPostRow>
  );
}
