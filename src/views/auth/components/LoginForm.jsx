import { StyledAuthForm } from "../styles/Login.styled";

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
      <button
        className={canSubmit ? "activeButton" : "disabledButton"}
        disabled={!canSubmit}
      >
        Zaloguj się
      </button>
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
