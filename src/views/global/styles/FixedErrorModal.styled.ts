import styled from "styled-components";

export const StyledFixedErrorModal = styled.section`
  position: fixed;
  left: 6rem;
  bottom: 6rem;
  z-index: 999999991;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.red};
  border-radius: 0.1rem;
  padding: 1rem 6rem 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkGray};

  & > .icon {
    color: ${({ theme }) => theme.colors.red};
  }

  & button {
    position: absolute;
    right: 0;
    height: 100%;
    border: none;
    width: 4rem;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.15);
    color: ${({ theme }) => theme.colors.red};
  }

  @media (orientation: portrait) {
    bottom: 50vh;
    left: 2.5vw;
    right: 2.5vw;
  }

  @media (max-width: 750px) {
    width: 95vw;
  }

  @media (max-width: 600px) {
    padding: 0.75rem 4rem 0.75rem 1rem;
    gap: 1rem;

    & button {
      width: 3rem;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 400px) {
    font-size: 1rem;

    & > .icon {
      display: none;
    }
  }

  @media (hover: hover) {
    & button:hover {
      cursor: pointer;
    }

    & > button:hover > .icon {
      filter: brightness(2);
      transform: scale(0.75);
    }
  }
`;
