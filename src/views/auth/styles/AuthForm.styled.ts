import styled from "styled-components";

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.15);

  h3 {
    font-size: 1.2rem;
    color: white;
  }

  & button {
    justify-content: center;
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 0.5rem;
  }

  & label,
  & button {
    margin-top: 1.5rem;
  }

  & label {
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
  }

  & section {
    display: none;
    line-height: 1.6rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & section > p {
    transition: opacity 0.5s ease-in-out;
  }

  & div > input:focus + section {
    display: block;
  }

  & input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.3rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    font-size: 1rem;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }

  & input[type="checkbox"]:focus {
    outline: none;
  }

  & input[type="checkbox"]:focus-visible {
    outline: 0.1rem solid white;
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
    margin: 0;
    padding: 0;
    border-radius: 0.3rem;
    accent-color: ${({ theme }) => theme.colors.sunset};
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
    & .flex {
      gap: 0.5rem;
    }

    & .flex input {
      width: 1.15rem;
      height: 1.15rem;
    }

    & .flex label {
      font-size: 1.15rem;
    }
  }
`;
