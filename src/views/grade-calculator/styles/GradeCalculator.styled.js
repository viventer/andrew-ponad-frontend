import styled from "styled-components";

export const StyledGradeCalculator = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  & .inputsWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
  }

  & .tablesWrapper {
    display: flex;
    gap: 5rem;
  }
`;
