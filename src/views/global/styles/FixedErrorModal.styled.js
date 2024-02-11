import styled from "styled-components";

export const StyledFixedErrorModal = styled.section`
  position: fixed;
  left: 6rem;
  bottom: 6rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: 0.2rem solid ${({ theme }) => theme.colors.red};
  border-radius: 0.1rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 141414;

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
