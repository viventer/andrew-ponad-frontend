import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledUserFromList } from "../styles/UserFromList.styled";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import RoleSelector from "./RoleSelector";

export default function UserFromList({ username, mainRole, id }) {
  return (
    <StyledUserFromList>
      <div>
        <FontAwesomeIcon icon={faUser} />
        <p>{username}</p>
      </div>
      <div>
        <RoleSelector mainRole={mainRole} />
      </div>
    </StyledUserFromList>
  );
}
