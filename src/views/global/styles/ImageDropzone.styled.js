import styled from "styled-components";

export const StyledImageDropzone = styled.div`
  ${({ $isabsolute }) =>
    $isabsolute &&
    `
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%);
    `}
  z-index: 200;
  outline: 0.15rem dashed rgba(255, 255, 255, 0.15);
  font-size: 1.2rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.01);
  cursor: pointer;
  transition: outline 0.15s ease-in-out;

  & p {
    padding: 0 1rem;
    text-align: center;
  }

  & .icon {
    font-size: 3rem;
  }

  & .icon,
  & .change-icon {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & .change-icon {
    filter: opacity(0);
    font-size: 7rem;
  }

  & .change-icon,
  & .change-paragraph {
    transition: all 0.15s ease-in-out;
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
`;
