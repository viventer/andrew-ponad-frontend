import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { StyledButton } from "../../global/styles/Button.styled";

export default function VerificationButton() {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={faCheck} />
      Zweryfikuj się
    </StyledButton>
  );
}
