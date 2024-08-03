import styled from "styled-components";

export const StyledDynamicErrorNotification = styled.section`
  width: 100%;
  max-width: 17rem;
  margin-top: 1rem;
  text-align: center;
  border: 0.1rem solid red;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: rgba(255, 0, 0, 0.25);

  & > p {
    color: white;
  }

  &.gradeCalc {
    max-width: 30rem;
    width: fit-content;
    position: absolute;
    right: 0;
    top: -1rem;
  }

  @media (max-width: 1200px) {
    &.gradeCalc {
      max-width: 25rem;
    }
  }

  @media (max-width: 950px) {
    &.gradeCalc {
      position: static;
      max-width: 100%;
    }
  }
`;
