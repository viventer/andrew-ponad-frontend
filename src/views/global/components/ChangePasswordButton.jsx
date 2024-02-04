import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Button.styled";
import { faKey } from "@fortawesome/free-solid-svg-icons";

export default function ChangePasswordButton({
  setIsChangePwdWindowVisible,
  setFinishedPwdChange,
}) {
  return (
    <StyledButton
      onClick={() => {
        setIsChangePwdWindowVisible((prev) => !prev);
        setFinishedPwdChange(false);
      }}
    >
      <FontAwesomeIcon icon={faKey} />
      Zmień hasło
    </StyledButton>
  );
}
