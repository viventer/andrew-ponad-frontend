import { StyledAuthForm } from "../../auth/styles/Login.styled";
import { StyledButton } from "../styles/Button.styled";

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
      <div>
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
        <section ref={references.passwordRequirementsRef}>
          <p>&bull; od 8 do 32 znaków</p>
          <p>&bull; duża litera</p>
          <p>&bull; mała litera</p>
          <p>&bull; cyfra</p>
          <p>&bull; znak specjalny</p>
          <p>&bull; brak spacji</p>
        </section>
      </div>
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
      <StyledButton disabled={!canSubmit} onClick={handlers.handleSubmit}>
        Zmień hasło
      </StyledButton>
    </StyledAuthForm>
  );
}
