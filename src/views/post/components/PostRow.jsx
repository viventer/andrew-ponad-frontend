import DOMPurify from "dompurify";

import { StyledPostRow } from "../styles/PostRow.styled";

export default function PostRow({ rowData }) {
  const firstElementType = rowData[0].type;
  const secondElementType = rowData[1].type;
  const elementsTypes = [firstElementType, secondElementType];

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
          <img
            src={rowData[i].imagePreview}
            key={i}
            className="responsivePostElement"
          />
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
