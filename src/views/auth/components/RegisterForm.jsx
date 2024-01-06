import { StyledAuthForm } from "../styles/Login.styled";

export function RegisterForm({ canSave, data, handlers, usernameRef }) {
  return (
    <StyledAuthForm onSubmit={handlers.onSignUpClicked}>
      <label htmlFor="username">
        Username: <span>[3-20 letters]</span>
      </label>
      <input
        id="username"
        type="text"
        autoComplete="off"
        value={data.username}
        onChange={handlers.onUsernameChanged}
        required
        ref={usernameRef}
      />

      <label htmlFor="password">
        Password: <span>[4-12 chars incl. !@#$%]</span>
      </label>
      <input
        id="password"
        type="password"
        value={data.password}
        onChange={handlers.onPasswordChanged}
        required
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        id="confirmPassword"
        type="password"
        value={data.confirmPassword}
        onChange={handlers.onConfirmPasswordChanged}
        required
      />
      <button
        disabled={!canSave}
        className={canSave ? "activeButton" : "disabledButton"}
      >
        Sign up
      </button>
      <div className="flex">
        <input
          type="checkbox"
          id="persist"
          onChange={handlers.onPersistToggle}
          checked={data.persist}
        />
        <label htmlFor="persist">Trust this device</label>
      </div>
    </StyledAuthForm>
  );
}
