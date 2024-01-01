import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledUserInfo } from "../styles/UserInfo.styled";
import { faPencil, faUser } from "@fortawesome/free-solid-svg-icons";

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
          <button>Zweryfikuj się</button>
        </section>
        <section className="flex">
          <button>Wyloguj się</button>
          <button>Zmień hasło</button>
          <button>Usuń konto</button>
        </section>
      </article>
    </StyledUserInfo>
  );
}
