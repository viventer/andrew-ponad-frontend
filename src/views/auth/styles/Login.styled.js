import styled from "styled-components";

export const StyledAuth = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  box-shadow: 0 0 1rem rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 2rem;
  margin-top: 4rem;
  max-width: 100%;

  & h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  & .flex {
    font-size: 1rem;
    justify-content: left;
    gap: 2rem;
    width: 100%;
    align-items: center;
  }

  & .flex p:last-child {
    color: ${({ theme }) => theme.colors.sunset};
    text-decoration-line: underline;
  }

  @media (max-width: 425px) {
    box-shadow: none;
    width: 95%;
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    margin-top: 1.5rem;
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
    font-size: 1.2rem;
    background-color: rgba(255, 255, 255, 0.15);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }

  & input:focus {
    outline: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & label {
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
  }

  & button {
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.5rem;
    border: none;
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.colors.navy};
    width: 100%;
  }

  & .activeButton:hover {
    filter: brightness(1.25);
    cursor: pointer;
  }

  & .disabledButton {
    filter: brightness(0.5);
  }

  & .flex {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  & .flex input {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: ${({ theme }) => theme.colors.sunset};
    border-radius: 0.3rem;
    margin: 0;
    padding: 0;
  }

  & .flex label {
    margin: 0;
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
