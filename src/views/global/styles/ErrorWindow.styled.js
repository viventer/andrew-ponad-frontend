import styled from "styled-components";

export const StyledErrorWindow = styled.section`
  padding: 1rem 0.5rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 0.2rem;
  border: 0.1rem solid rgba(255, 0, 0, 0.2);
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
