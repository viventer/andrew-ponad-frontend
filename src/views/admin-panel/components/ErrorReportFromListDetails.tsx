import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import DOMPurify from "dompurify";

import { StyledErrorReportFromListDetails } from "../styles/ErrorReportFromListDetails.styled";
import useIsThumbnailUrlCorrect from "../../../hooks/useIsThumbnailUrlCorrect";
import { ErrorReportType } from "../../error-reports/types/errorReport.types";

export default function ErrorReportFromListDetails({
  reportData,
}: {
  reportData: ErrorReportType;
}) {
  const sanitizedHTML = DOMPurify.sanitize(reportData.description);
  const creationDate = new Date(reportData.createdAt).toLocaleDateString("PL");

  const isThumbnailUrlCorrect = useIsThumbnailUrlCorrect();

  const formattedImages = reportData.images.map((imageUrl, index) => {
    const isImageCorrect = isThumbnailUrlCorrect(imageUrl);
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
