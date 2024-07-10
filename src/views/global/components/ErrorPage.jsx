import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledErrorPage } from "../styles/ErrorPage.styled";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function ErrorPage({ headingMessage, subheadingMessage }) {
  return (
    <StyledErrorPage>
      <div className="messageWrapper">
        <section className="firstRow">
          <FontAwesomeIcon icon={faExclamationTriangle} className="icon" />
          <p>{headingMessage}</p>
        </section>
        <p>{subheadingMessage}</p>
      </div>
    </StyledErrorPage>
  );
}
