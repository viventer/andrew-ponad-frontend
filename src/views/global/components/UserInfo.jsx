import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledUserInfo } from "../styles/UserInfo.styled";
import { StyledButton } from "../styles/Button.styled";
import {
  faCheck,
  faKey,
  faPencil,
  faRightFromBracket,
  faUser,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LogoutButton from "./LogoutButton";
import DeleteAccountButton from "./DeleteAccountButton";
import ChangePasswordButton from "./ChangePasswordButton";
import VerificationButton from "./VerificationButton";

export default function UserInfo() {
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

  return (
    <StyledUserInfo>
      <button onClick={() => setIsUserInfoVisible((prev) => !prev)}>
        <FontAwesomeIcon icon={faUser} className="icon" />
      </button>
      <article className={isUserInfoVisible ? "visible" : ""}>
        <header className="flex">
          <h2>Informacje o koncie</h2>
          <StyledButton>
            <FontAwesomeIcon icon={faPencil} />
            Edytuj dane
          </StyledButton>
        </header>
        <section>
          <p>
            login: <span>jakasnazwauseramax20</span>
          </p>
          <p>
            email: <span>jakisemailciekawy@gmail.com</span>
          </p>
          <p>
            imię: <span>Jan</span>
          </p>
          <p>
            nazwisko: <span>Kowalski</span>
          </p>
          <p>
            rola: <span>niezweryfikowany</span>
          </p>
          <VerificationButton />
        </section>
        <section className="flex">
          <LogoutButton />
          <ChangePasswordButton />
          <DeleteAccountButton />
        </section>
      </article>
    </StyledUserInfo>
  );
}
