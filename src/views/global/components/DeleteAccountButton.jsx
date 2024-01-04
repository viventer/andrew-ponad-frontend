import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";

export default function DeleteAccountButton() {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={faUserSlash} />
      Usuń konto
    </StyledButton>
  );
}
