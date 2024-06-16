import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import DOMPurify from "dompurify";

import useGetBase64Regex from "../../../hooks/useGetBase64Regex";

import { StyledErrorReportFromListDetails } from "../styles/ErrorReportFromListDetails.styled";

export default function ErrorReportFromListDetails({ reportData }) {
  const sanitizedHTML = DOMPurify.sanitize(reportData.description);
  const creationDate = new Date(reportData.createdAt).toLocaleDateString("PL");
  const base64Regex = useGetBase64Regex();

  const formattedImages = reportData.images.map((imageUrl, index) => {
    const isImageCorrect = base64Regex.test(imageUrl);
    if (isImageCorrect) return <img src={imageUrl} key={index} />;
  });

  const [showScreenshots, setShowScreenshots] = useState(false);

  const hasImages =
    formattedImages.length > 0 && formattedImages[0] != undefined;

  return (
    <StyledErrorReportFromListDetails>
      <h3 className="reportTitle">{reportData.title}</h3>
      <h3>Opis błędu:</h3>
      <article dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></article>
      {hasImages && (
        <button onClick={() => setShowScreenshots((prev) => !prev)}>
          <h3>Dołączone zrzuty ekranu</h3>
          <FontAwesomeIcon
            icon={showScreenshots ? faChevronUp : faChevronDown}
          />
        </button>
      )}
      {showScreenshots && (
        <section className="images">{formattedImages}</section>
      )}
      <p className="creationDate">
        <span>data utworzenia: </span>
        {creationDate}
      </p>
      {reportData.username && (
        <p>
          <span>autor: </span>
          {reportData.username}
        </p>
      )}
    </StyledErrorReportFromListDetails>
  );
}
