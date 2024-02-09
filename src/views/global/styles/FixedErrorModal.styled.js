import styled from "styled-components";

export const StyledFixedErrorModal = styled.section`
  position: fixed;
  left: 6rem;
  bottom: 6rem;
  z-index: 1000;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  border: 0.2rem solid ${({ theme }) => theme.colors.red};
  border-radius: 0.1rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > .icon {
    color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 750px) {
    left: 10vw;
    right: 10vw;
    bottom: 10vh;
    width: 80vw;
    font-size: 1rem;
  }
`;
