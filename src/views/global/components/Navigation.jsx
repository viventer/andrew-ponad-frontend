import { StyledNavigation } from "../styles/Navigation.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUbuntu, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faGraduationCap,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const icons = [faWindows, faUbuntu, faWifi, faCode, faGraduationCap];

  const iconElements = icons.map((icon, i) => (
    <div className="icon" key={i}>
      <FontAwesomeIcon icon={icon} />
    </div>
  ));
  return <StyledNavigation>{iconElements}</StyledNavigation>;
}
