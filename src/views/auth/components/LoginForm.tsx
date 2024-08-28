import React, { MutableRefObject } from "react";
import { StyledButton } from "../../global/styles/Button.styled";
import { StyledAuthForm } from "../styles/AuthForm.styled";

type Props = {
  handlers: Handlers;
  loginData: LoginData;
  usernameRef: MutableRefObject<HTMLInputElement>;
  canSubmit: boolean;
};

type Handlers = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePwdInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePersistToggle: () => void;
};

type LoginData = {
  username: string;
  password: string;
  persist: boolean;
};

export default function LoginForm({
  handlers,
  loginData,
  usernameRef,
  canSubmit,
}: Props) {
  return (
    <StyledAuthForm onSubmit={handlers.handleSubmit}>
      <label htmlFor="username">Nazwa użytkownika:</label>
      <input
        type="text"
        id="username"
        ref={usernameRef}
        value={loginData.username}
        onChange={handlers.handleUserInput}
        autoComplete="off"
        required
        maxLength={24}
      />
      <label htmlFor="password">Hasło:</label>
      <input
        type="password"
        id="password"
        onChange={handlers.handlePwdInput}
        value={loginData.password}
        required
        maxLength={32}
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
