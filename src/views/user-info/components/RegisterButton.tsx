import { Link } from "react-router-dom";

import { StyledButton } from "../../global/styles/Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function RegisterButton() {
  return (
    <StyledButton>
      <Link
        to="/register"
        className="reactRouterLink"
        data-test="registerButton"
      >
        <FontAwesomeIcon icon={faUserPlus} className="icon" />
        <p>Zarejestruj się</p>
      </Link>
    </StyledButton>
  );
}
