import styled from "styled-components";

export const StyledAuth = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  box-shadow: 0 0 1.5rem rgba(255, 255, 255, 0.25);
  border-radius: 0.3rem;
  padding: 1rem;
  margin-top: 4rem;
  max-width: 100%;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 425px) {
    box-shadow: none;
  }

  & .flex {
    font-size: 1.2rem;
    justify-content: left;
    gap: 2rem;
    width: 100%;
    align-items: center;
  }

  & .flex p:last-child {
    color: ${({ theme }) => theme.colors.sunset};
    text-decoration-line: underline;
  }
`;

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;

  & input,
  & button {
    margin-bottom: 1.5rem;
  }

  & input {
    color: white;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.25);
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem;
  }

  & label {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  & input:last-child {
    margin-bottom: 0.5rem;
  }

  & button {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem;
    border: none;
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.colors.navy};
  }

  & .activeButton:hover {
    filter: brightness(1.25);
    cursor: pointer;
  }

  & .disabledButton {
    filter: brightness(0.6);
  }

  & .flex {
    display: flex;
    justify-content: left;
    gap: 1rem;
  }

  & .flex input {
    align-self: flex-end;
    margin-top: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    accent-color: ${({ theme }) => theme.colors.navy};
    border-radius: 0.3rem;
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  @media (max-width: 425px) {
    & button,
    & input,
    & label {
      font-size: 1.3rem;
    }
  }
`;
