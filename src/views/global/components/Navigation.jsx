import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledNavigation } from "../styles/Navigation.styled";
import { faUbuntu, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faGraduationCap,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <StyledNavigation>
      <div className="icon">
        <FontAwesomeIcon icon={faWindows} />
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faUbuntu} />
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faWifi} />
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faCode} />
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faGraduationCap} />
      </div>
    </StyledNavigation>
  );
}
