import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";
import { faKey } from "@fortawesome/free-solid-svg-icons";

export default function ChangePasswordButton({ setIsChangePwdWindowVisible }) {
  return (
    <StyledButton onClick={() => setIsChangePwdWindowVisible(true)}>
      <FontAwesomeIcon icon={faKey} />
      Zmień hasło
    </StyledButton>
  );
}
