import { StyledAuthForm } from "../../auth/styles/Login.styled";

export default function ChangePasswordForm({
  references,
  handlers,
  data,
  canSubmit,
}) {
  return (
    <StyledAuthForm>
      <label htmlFor="oldPassword" ref={references.oldPasswordRef}>
        Stare hasło
      </label>
      <input type="password" id="oldPassword" required />
      <label htmlFor="newPassword">Nowe hasło</label>
      <input type="password" id="newPassword" required />
      <label htmlFor="confirmNewPassword">Potwierdź nowe hasło</label>
      <input type="password" id="confirmNewPassword" required />
      <button>Zmień hasło</button>
    </StyledAuthForm>
  );
}
