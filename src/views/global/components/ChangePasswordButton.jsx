import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";
import { faKey } from "@fortawesome/free-solid-svg-icons";

export default function ChangePasswordButton() {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={faKey} />
      Zmień hasło
    </StyledButton>
  );
}
