import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";

export default function LogoutButton() {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={faRightFromBracket} />
      Wyloguj się
    </StyledButton>
  );
}
