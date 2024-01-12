import { StyledAuthForm } from "../styles/Login.styled";

export function RegisterForm({
  canSave,
  persist,
  handlers,
  usernameRef,
  inputs,
  passwordRequirementsRef,
}) {
  return (
    <StyledAuthForm onSubmit={handlers.onSignUpClicked}>
      <label htmlFor="username">Nazwa użytkownika:</label>
      <div>
        <input
          id="username"
          type="text"
          autoComplete="off"
          value={inputs.username}
          onChange={(e) =>
            handlers.handleInputChange("username", e.target.value)
          }
          required
          ref={usernameRef}
        />
        <section>
          <p>- nazwa powinna zawierać od 3 do 20 znaków</p>
          <p>- może zawierać litery (min. 2), liczby i znak specjalny: "_"</p>
        </section>
      </div>

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        autoComplete="off"
        value={inputs.email}
        onChange={(e) => handlers.handleInputChange("email", e.target.value)}
        required
      />

      <label htmlFor="firstName">Imię:</label>
      <input
        id="firstName"
        type="text"
        autoComplete="off"
        value={inputs.firstName}
        onChange={(e) =>
          handlers.handleInputChange("firstName", e.target.value)
        }
        required
      />

      <label htmlFor="lastName">Nazwisko:</label>
      <input
        id="lastName"
        type="text"
        autoComplete="off"
        value={inputs.lastName}
        onChange={(e) => handlers.handleInputChange("lastName", e.target.value)}
        required
      />

      <label htmlFor="password">Hasło:</label>
      <div>
        <input
          id="password"
          type="password"
          value={inputs.password}
          onChange={(e) =>
            handlers.handleInputChange("password", e.target.value)
          }
          required
        />
        <section ref={passwordRequirementsRef}>
          <h3>Musi zawierać:</h3>
          <p>- od 8 do 32 znaków</p>
          <p>- dużą literę</p>
          <p>- małą literę</p>
          <p>- cyfrę</p>
          <p>- znak specjalny</p>
        </section>
      </div>

      <label htmlFor="confirmPassword">Potwierdź hasło:</label>
      <input
        id="confirmPassword"
        type="password"
        value={inputs.confirmPassword}
        onChange={(e) =>
          handlers.handleInputChange("confirmPassword", e.target.value)
        }
        required
      />
      <button
        disabled={!canSave}
        className={canSave ? "activeButton" : "disabledButton"}
      >
        Zarejestruj się
      </button>
      <div className="flex">
        <input
          type="checkbox"
          id="persist"
          onChange={handlers.onPersistToggle}
          checked={persist}
        />
        <label htmlFor="persist">Zapamiętaj to urządzenie</label>
      </div>
    </StyledAuthForm>
  );
}
