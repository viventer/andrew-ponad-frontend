import { MutableRefObject } from "react";
import { StyledAuthForm } from "../../auth/styles/AuthForm.styled";
import { StyledButton } from "../../global/styles/Button.styled";

type Props = {
  handlers: Handlers;
  inputs: Inputs;
  references: References;
  canSubmit: boolean;
};

type Handlers = {
  handleSubmit: (e: any) => void;
  handleInputChange: (fieldName: string, value: string) => void;
};

type Inputs = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

type References = {
  oldPasswordRef: MutableRefObject<HTMLInputElement>;
  newPasswordRef: MutableRefObject<HTMLInputElement>;
  confirmNewPasswordRef: MutableRefObject<HTMLInputElement>;
  passwordRequirementsRef: MutableRefObject<HTMLElement>;
};

export default function ChangePasswordForm({
  handlers,
  inputs,
  references,
  canSubmit,
}: Props) {
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
