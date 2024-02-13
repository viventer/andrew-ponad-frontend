import styled from "styled-components";

export const StyledFixedErrorModal = styled.section`
  position: fixed;
  left: 6rem;
  bottom: 6rem;
  z-index: 141414;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.red};
  border-radius: 0.1rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkGray};

  & > .icon {
    color: ${({ theme }) => theme.colors.red};
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
