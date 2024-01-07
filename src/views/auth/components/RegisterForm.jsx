import { StyledAuthForm } from "../styles/Login.styled";

export function RegisterForm({
  canSave,
  persist,
  handlers,
  usernameRef,
  inputs,
}) {
  return (
    <StyledAuthForm onSubmit={handlers.onSignUpClicked}>
      <label htmlFor="username">
        Username: <span>[3-20 letters]</span>
      </label>
      <input
        id="username"
        type="text"
        autoComplete="off"
        value={inputs.username}
        onChange={handlers.handleInputChange}
        required
        ref={usernameRef}
      />

      <label htmlFor="password">
        Password: <span>[4-12 chars incl. !@#$%]</span>
      </label>
      <input
        id="password"
        type="password"
        value={inputs.password}
        onChange={handlers.handleInputChange}
        required
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        id="confirmPassword"
        type="password"
        value={inputs.confirmPassword}
        onChange={handlers.handleInputChange}
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
          checked={persist}
        />
        <label htmlFor="persist">Trust this device</label>
      </div>
    </StyledAuthForm>
  );
}
