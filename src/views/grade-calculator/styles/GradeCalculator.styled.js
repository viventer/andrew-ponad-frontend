import styled from "styled-components";

export const StyledGradeCalculator = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .gradeCalculatorWrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: fit-content;
    height: fit-content;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.02);
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 0.5rem;
  }

  & .upperWrapper {
    display: flex;
    gap: 2rem;
    align-items: end;
  }

  & .inputsWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & .tablesWrapper {
    display: flex;
    gap: 4rem;
  }

  @media (max-height: 850px) {
    & .gradeCalculatorWrapper {
      background-color: rgba(0, 0, 0, 0);
      box-shadow: none;
      margin: 1rem 0;
    }
  }

  @media (max-width: 1200px) {
    width: 80%;

    & .tablesWrapper {
      justify-content: space-between;
      gap: 2rem;
    }

    & .gradeCalculatorWrapper {
      background-color: rgba(0, 0, 0, 0);
      box-shadow: none;
      margin: 1rem 0;
    }
  }

  @media (max-width: 1050px) {
    width: 90%;
  }

  @media (max-width: 950px) {
    & .tablesWrapper {
      justify-content: left;
      gap: 4rem;
      flex-wrap: wrap;
    }

    & .upperWrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: start;
    }
  }

  @media (max-width: 750px) {
    & .tablesWrapper {
      gap: 2rem;
      justify-content: space-between;
    }
  }

  @media (max-width: 676px) {
    max-width: 22rem;

    & .tablesWrapper {
      flex-direction: column;
    }
  }
`;
