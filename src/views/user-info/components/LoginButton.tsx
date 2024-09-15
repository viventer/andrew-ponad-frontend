import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import { StyledButton } from "../../global/styles/Button.styled";

export default function LoginButton() {
  return (
    <StyledButton data-test="loginButton">
      <Link to="/login" className="reactRouterLink">
        <FontAwesomeIcon icon={faRightToBracket} className="icon" />
        <p>Zaloguj się</p>
      </Link>
    </StyledButton>
  );
}
