import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

import { StyledButton } from "../../global/styles/Button.styled";

type Props = {
  setIsChangePwdWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFinishedPwdChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ChangePasswordButton({
  setIsChangePwdWindowVisible,
  setFinishedPwdChange,
}: Props) {
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
