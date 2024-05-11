import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBucket, faBug } from "@fortawesome/free-solid-svg-icons";

import { StyledFooter } from "../styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <button>
        <FontAwesomeIcon icon={faBug} />
        <p>Zgłoś błąd</p>
      </button>
      <article>
        <FontAwesomeIcon icon={faBucket} />
        <p>
          Codebucket <span>Studio 2024</span>
        </p>
      </article>
    </StyledFooter>
  );
}
