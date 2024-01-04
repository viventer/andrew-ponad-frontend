import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function VerificationButton() {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={faCheck} />
      Zweryfikuj się
    </StyledButton>
  );
}
