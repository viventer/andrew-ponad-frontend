import styled from "styled-components";

export const StyledGradeCalculator = styled.main`
  align-items: center;
  justify-content: center;
  width: 100%;

  &,
  & .gradeCalculatorWrapper,
  & .upperWrapper,
  & .inputsWrapper,
  & .tablesWrapper {
    display: flex;
  }

  & .gradeCalculatorWrapper {
    flex-direction: column;
    gap: 2rem;
    width: fit-content;
    height: fit-content;
    padding: 2rem;
    border-radius: 0.5rem;
    margin: 2rem 0;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.02);
  }

  & .upperWrapper {
    position: relative;
    align-items: end;
    gap: 2rem;
  }

  & .inputsWrapper {
    flex-direction: column;
    gap: 1rem;
  }

  & .tablesWrapper {
    gap: 4rem;
  }

  @media (max-height: 850px) {
    & .gradeCalculatorWrapper {
      margin: 1rem 0;
      box-shadow: none;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @media (max-width: 1200px) {
    width: 80%;

    & .tablesWrapper {
      justify-content: space-between;
      gap: 2rem;
    }

    & .gradeCalculatorWrapper {
      margin: 1rem 0;
      box-shadow: none;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @media (max-width: 1050px) {
    width: 90%;
  }

  @media (max-width: 950px) {
    & .tablesWrapper {
      justify-content: left;
      flex-wrap: wrap;
      gap: 4rem;
    }

    & .upperWrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }
  }

  @media (max-width: 750px) {
    & .tablesWrapper {
      justify-content: space-between;
      gap: 2rem;
    }
  }

  @media (max-width: 676px) {
    max-width: 22rem;

    & .tablesWrapper {
      flex-direction: column;
    }
  }
`;
