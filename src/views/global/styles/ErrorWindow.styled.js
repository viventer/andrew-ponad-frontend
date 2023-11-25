import styled from "styled-components";

export const StyledErrorWindow = styled.section`
  padding: 1rem 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 0.1rem;
  border: 0.1rem solid rgba(255, 0, 0, 0.2);
  font-weight: 500;
  position: fixed;
  left: 3rem;
  bottom: 3rem;
  z-index: 1000;

  @media (max-width: 750px) {
    font-size: 1rem;
    width: 80vw;
    left: 10vw;
    right: 10vw;
    bottom: 10vh;
  }
`;
