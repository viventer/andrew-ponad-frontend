import DOMPurify from "dompurify";
import { StyledErrorReportFromListDetails } from "../styles/ErrorReportFromListDetails.styled";

export default function ErrorReportFromListDetails({ reportData }) {
  const sanitizedHTML = DOMPurify.sanitize(reportData.description);
  const creationDate = new Date(reportData.createdAt).toLocaleDateString("PL");
  const base64Regex = /^data:image\/[^;]+;base64,/;

  return (
    <StyledErrorReportFromListDetails>
      <h3>Opis błędu:</h3>
      <article dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></article>
      <h3>Dołączone zrzuty ekranu:</h3>
      {reportData.images.map((imageUrl, index) => {
        const isImageCorrect = base64Regex.test(imageUrl);
        if (isImageCorrect) return <img src={imageUrl} key={index} />;
      })}
      <p>
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
