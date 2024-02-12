import styled from "styled-components";

export const StyledAuth = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  border: 0.1rem solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 2rem 4rem;
  margin-top: 4rem;
  max-width: 100%;

  & h2 {
    font-size: 1.4rem;
    font-weight: 500;
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

  @media (max-width: 1000px) {
    padding: 2rem;
  }

  @media (max-width: 425px) {
    box-shadow: none;
    width: 95vw;
    margin-top: 1.5rem;
  }

  @media (max-width: 335px) {
    & > .flex {
      justify-content: space-between;
      gap: 0;
    }
  }
`;

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.15);

  & button {
    margin-bottom: 1.5rem;
    width: 100%;
    justify-content: center;
    padding: 0.5rem;
  }

  & label,
  & button {
    margin-top: 1.5rem;
  }

  & section {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.sunset};
    font-size: 1rem;
    line-height: 1.6rem;
    display: none;
  }

  & section > p {
    transition: opacity 0.5s ease-in-out;
  }

  & div > input:focus + section {
    display: block;
  }

  & input {
    color: white;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem 0.75rem;
    width: 100%;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & input[type="checkbox"]:focus {
    outline: none;
  }

  & input[type="checkbox"]:focus-visible {
    outline: 0.1rem solid white;
  }

  h3 {
    color: white;
    font-size: 1.2rem;
  }

  & input:focus {
    border-bottom: none;
    outline: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & input.correct {
    border-color: ${({ theme }) => theme.colors.green};
    outline-color: ${({ theme }) => theme.colors.green};
  }

  & input.incorrect {
    border-color: ${({ theme }) => theme.colors.red};
    outline-color: ${({ theme }) => theme.colors.red};
  }

  & label {
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
  }

  & button[disabled] {
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

  @media (max-width: 340px) {
    & .flex input {
      width: 1.15rem;
      height: 1.15rem;
    }

    & .flex {
      gap: 0.5rem;
    }

    & .flex label {
      font-size: 1.15rem;
    }
  }
`;
