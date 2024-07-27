import styled from "styled-components";

export const StyledVideoUploader = styled.article`
  position: relative;
  height: fit-content !important;

  & .urlInputWrapper {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(3px);
    transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;
  }

  & .urlInputWrapper:not(:has(.shown)) {
    box-shadow: 0.3rem 0.3rem ${({ theme }) => theme.colors.sunset};
  }

  & .urlInputWrapper:active:not(:has(.shown)) {
    transform: translate(0.3rem, 0.3rem);
    box-shadow: 0 0 rgba(0, 0, 0, 0);
  }

  & .urlInputWrapper button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-size: 1rem;
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: color 0.15s ease-in-out;
  }

  & .urlInputWrapper button:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  & label {
    width: fit-content;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
  }

  & #urlInput {
    display: none;
    width: 30rem;
    max-width: 30vw;
    padding-left: 0.5rem;
    border: none;
    border-left: 0.2rem solid ${({ theme }) => theme.colors.sunset};
    font-size: 1rem;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    transition: border-left 0.15s ease;
  }

  & #urlInput:focus {
    outline: none;
  }

  & #urlInput:focus-visible {
    border-left: 0.8rem solid ${({ theme }) => theme.colors.sunset};
  }

  & #urlInput.shown {
    display: inline-block;
  }

  & .reactPlayerWrapper {
    height: fit-content;
    width: 100%;
  }

  @media (max-width: 500px) {
    #urlInput {
      font-size: 0.9rem;
    }

    & .urlInputWrapper button {
      font-size: 0.9rem;
    }

    & .urlInputWrapper {
      padding: 0.3rem 0.5rem;
    }

    & .urlInputWrapper:not(:has(.shown)) {
      box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.colors.sunset};
    }

    & .urlInputWrapper:active:not(:has(.shown)) {
      transform: translate(0.2rem, 0.2rem);
    }
  }

  @media (max-width: 400px) {
    & .urlInputWrapper {
      right: 0.5rem;
    }
  }
`;
