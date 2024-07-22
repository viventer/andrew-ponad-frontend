import styled from "styled-components";

export const StyledVideoUploader = styled.article`
  position: relative;

  & .urlInputWrapper {
    position: absolute;
    top: 15%;
    right: 1%;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(3px);
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1rem;
    box-shadow: 0.4rem 0.4rem 0.6rem rgba(0, 0, 0, 0.75);
  }

  & label {
    font-weight: 500;
    width: fit-content;
  }

  & #urlInput {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    font-size: 1rem;
    padding-left: 0.5rem;
    border-left: 0.2rem solid ${({ theme }) => theme.colors.sunset};
    flex: 1;
    transition: border-left 0.15s ease;
  }

  & #urlInput:focus {
    outline: none;
  }

  & #urlInput:focus-visible {
    border-left: 0.8rem solid ${({ theme }) => theme.colors.sunset};
  }

  & .reactPlayerWrapper {
    width: 100%;
    height: 100%;
  }

  & .reactPlayer {
    height: 100% !important;
    width: 100% !important;
  }
`;
