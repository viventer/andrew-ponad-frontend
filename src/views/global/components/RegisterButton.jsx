import { Link } from "react-router-dom";

import { StyledButton } from "../styles/Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function RegisterButton() {
  return (
    <StyledButton>
      <Link to="/register" className="reactRouterLink">
        <FontAwesomeIcon icon={faUserPlus} />
        <p>Zarejestruj się</p>
      </Link>
    </StyledButton>
  );
}
