import styled from "styled-components";

export const StyledImageDropzone = styled.div`
  ${({ isabsolute }) =>
    isabsolute &&
    `
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%);
    `}
  text-align: center;
  z-index: 200;
  width: 90vw;
  height: calc(0.5625 * 90vw);
  max-width: 36rem;
  max-height: 20.25rem;
  outline: 0.15rem dashed rgba(255, 255, 255, 0.15);
  font-size: 1.2rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.01);
  cursor: pointer;
  transition: outline 0.15s ease-in-out;

  & p {
    padding: 0 1rem;
  }

  & .icon {
    font-size: 3rem;
  }

  & .icon,
  & .change-icon {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & .change-icon {
    font-size: 7rem;
    filter: opacity(0);
  }

  & .change-paragraph {
    filter: opacity(0);
    font-size: 1.75rem;
    font-weight: 500;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    transition: all 0.15s ease-in-out;
  }

  & .change-icon,
  & .change-paragraph {
    transition: all 0.15s ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      outline-width: 0.3rem;
      outline-color: rgba(255, 255, 255, 0.3);
    }

    &:hover > .hover-effect {
      background-color: rgba(0, 0, 0, 0.75);
    }

    &:hover .change-icon {
      filter: opacity(1);
    }

    &:hover .change-paragraph {
      filter: opacity(1);
    }
  }

  @media (hover: none) {
    &:active {
      outline-width: 0.3rem;
      outline-color: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 1500px) {
    width: 80vw;
    height: calc(0.5625 * 80vw);
    max-width: 32rem;
    max-height: 18rem;
  }

  @media (max-width: 1300px) {
    width: 70vw;
    height: calc(0.5625 * 70vw);
    max-width: 28rem;
    max-height: 15.75rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    width: 90vw;
    height: calc(0.5625 * 90vw);
    max-width: 36rem;
    max-height: 20.25rem;

    & .icon,
    & .change-icon {
      font-size: 2rem;
    }
  }
`;
