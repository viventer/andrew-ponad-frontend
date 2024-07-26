import styled from "styled-components";

export const StyledVideoUploader = styled.article`
  position: relative;

  & .urlInputWrapper {
    position: absolute;
    top: 5rem;
    right: 2.5rem;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    backdrop-filter: blur(3px);
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 1rem;
    width: 10rem;
    transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;
    z-index: 200;
  }

  & .urlInputWrapper:not(:has(.shown)) {
    box-shadow: 0.3rem 0.3rem ${({ theme }) => theme.colors.sunset};
  }

  & .urlInputWrapper:active:not(:has(.shown)) {
    box-shadow: 0 0 rgba(0, 0, 0, 0);
    transform: translate(0.3rem, 0.3rem);
  }

  & .urlInputWrapper:has(.shown) {
    width: 50%;
  }

  & .urlInputWrapper button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.15s ease-in-out;
  }

  & .urlInputWrapper button:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  & label {
    font-weight: 700;
    width: fit-content;
    cursor: pointer;
  }

  & #urlInput {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    font-size: 1rem;
    flex: 1;
    display: none;
    border-left: 0.2rem solid ${({ theme }) => theme.colors.sunset};
    padding-left: 0.5rem;
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
    width: 100%;
    height: 100%;
  }

  & .reactPlayer {
    height: 100% !important;
    width: 100% !important;
  }

  & .videoPlaceholder {
  }
`;
