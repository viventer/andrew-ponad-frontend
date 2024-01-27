import { StyledAuthForm } from "../../auth/styles/Login.styled";

export default function ChangePasswordForm({
  handlers,
  inputs,
  references,
  canSubmit,
}) {
  return (
    <StyledAuthForm>
      <label htmlFor="oldPassword">Stare hasło</label>
      <input
        type="password"
        id="oldPassword"
        required
        value={inputs.oldPassword}
        ref={references.oldPasswordRef}
        onChange={(e) =>
          handlers.handleInputChange("oldPassword", e.target.value)
        }
        autoComplete="off"
      />
      <label htmlFor="newPassword">Nowe hasło</label>
      <input
        type="password"
        id="newPassword"
        required
        autoComplete="off"
        value={inputs.newPassword}
        ref={references.newPasswordRef}
        onChange={(e) =>
          handlers.handleInputChange("newPassword", e.target.value)
        }
      />
      <label htmlFor="confirmNewPassword">Potwierdź nowe hasło</label>
      <input
        type="password"
        id="confirmNewPassword"
        required
        autoComplete="off"
        value={inputs.confirmNewPassword}
        ref={references.confirmNewPasswordRef}
        onChange={(e) =>
          handlers.handleInputChange("confirmNewPassword", e.target.value)
        }
      />
      <button disabled={!canSubmit}>Zmień hasło</button>
    </StyledAuthForm>
  );
}
