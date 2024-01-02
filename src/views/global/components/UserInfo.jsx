import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledUserInfo } from "../styles/UserInfo.styled";
import {
  faCheck,
  faKey,
  faPencil,
  faRightFromBracket,
  faUser,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";

export default function UserInfo() {
  return (
    <StyledUserInfo>
      <button>
        <FontAwesomeIcon icon={faUser} className="icon" />
      </button>
      <article>
        <header className="flex">
          <h2>Informacje o koncie</h2>
          <button>
            <FontAwesomeIcon icon={faPencil} />
          </button>
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
          <button className="verifyButton">
            <FontAwesomeIcon icon={faCheck} />
            Zweryfikuj się
          </button>
        </section>
        <section className="flex">
          <button>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Wyloguj się
          </button>
          <button>
            <FontAwesomeIcon icon={faKey} />
            Zmień hasło
          </button>
          <button>
            <FontAwesomeIcon icon={faUserSlash} />
            Usuń konto
          </button>
        </section>
      </article>
    </StyledUserInfo>
  );
}
