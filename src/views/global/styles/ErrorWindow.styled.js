import styled from "styled-components";

export const StyledErrorWindow = styled.section`
  position: fixed;
  left: 3rem;
  bottom: 3rem;
  margin-top: 1rem;
  z-index: 1000;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border: 0.1rem solid rgba(255, 0, 0, 0.2);
  border-radius: 0.1rem;
  background-color: rgba(255, 0, 0, 0.1);

  @media (max-width: 750px) {
    left: 10vw;
    right: 10vw;
    bottom: 10vh;
    width: 80vw;
    font-size: 1rem;
  }
`;
