import { StyledButton } from "../../global/styles/Button.styled";
import { StyledAuthForm } from "../styles/AuthForm.styled";

export default function LoginForm({
  handlers,
  loginData,
  usernameRef,
  canSubmit,
}) {
  return (
    <StyledAuthForm onSubmit={handlers.handleSubmit}>
      <label htmlFor="username">Login</label>
      <input
        type="text"
        id="username"
        ref={usernameRef}
        value={loginData.username}
        onChange={handlers.handleUserInput}
        autoComplete="off"
        required
      />
      <label htmlFor="password">Hasło</label>
      <input
        type="password"
        id="password"
        onChange={handlers.handlePwdInput}
        value={loginData.password}
        required
      />
      <StyledButton
        className={canSubmit ? "activeButton" : "disabledButton"}
        disabled={!canSubmit}
      >
        <p>Zaloguj się</p>
      </StyledButton>
      <div className="flex">
        <input
          type="checkbox"
          id="persist"
          onChange={handlers.handlePersistToggle}
          checked={loginData.persist}
        />
        <label htmlFor="persist">Zapamiętaj to urządzenie</label>
      </div>
    </StyledAuthForm>
  );
}
