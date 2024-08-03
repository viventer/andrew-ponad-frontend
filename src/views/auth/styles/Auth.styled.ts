import styled from "styled-components";

export const StyledAuth = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  max-width: 100%;
  margin-top: 4rem;
  padding: 2rem 4rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;

  & h2 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
  }

  & .flex {
    align-items: center;
    justify-content: left;
    gap: 2rem;
    width: 100%;
    font-size: 1rem;
  }

  & .flex p:last-child {
    color: ${({ theme }) => theme.colors.sunset};
    text-decoration-line: underline;
  }

  @media (max-width: 1000px) {
    padding: 2rem;
  }

  @media (max-width: 425px) {
    width: 95vw;
    margin-top: 1.5rem;
    box-shadow: none;
  }

  @media (max-width: 335px) {
    & > .flex {
      justify-content: space-between;
      gap: 0;
    }
  }
`;
