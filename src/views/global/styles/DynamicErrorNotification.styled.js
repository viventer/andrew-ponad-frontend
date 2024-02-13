import styled from "styled-components";

export const StyledDynamicErrorNotification = styled.section`
  width: 100%;
  max-width: 20rem;
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
`;
