import { Link } from "react-router-dom";

import { StyledButton } from "../styles/Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function LoginButton() {
  return (
    <StyledButton>
      <Link to="/login" className="reactRouterLink">
        <FontAwesomeIcon icon={faRightToBracket} className="icon" />
        <p>Zaloguj się</p>
      </Link>
    </StyledButton>
  );
}
