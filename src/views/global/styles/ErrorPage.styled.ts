import styled from "styled-components";

export const StyledErrorPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 90vh;

  & .messageWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 3rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.4rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }

  & .firstRow {
    display: flex;
    gap: 0.5rem;
    font-weight: 500;
    font-size: 1.75rem;
    align-items: center;
    justify-content: center;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.red};
    padding-bottom: 0.5rem;
    width: 100%;
  }

  & .firstRow .icon {
    color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 1200px) {
    & .messageWrapper {
      padding: 1rem 2rem;
    }

    & .firstRow {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    & .messageWrapper {
      padding: 0.5rem 1rem;
    }

    & .firstRow {
      font-size: 1.25rem;
    }

    & .messageWrapper > p {
      font-size: 0.9rem;
    }
  }
`;
