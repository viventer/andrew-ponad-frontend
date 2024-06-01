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

  & button:hover {
    cursor: pointer;
  }

  & > button:hover > .icon {
    filter: brightness(2);
    transform: scale(0.75);
  }

  @media (orientation: portrait) {
    bottom: 70vh;
  }

  @media (max-width: 750px) {
    left: 5vw;
    right: 5vw;
    width: 90vw;
  }
`;
