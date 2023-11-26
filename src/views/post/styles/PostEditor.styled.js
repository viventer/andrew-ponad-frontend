import styled from "styled-components";

export const StyledPostEditor = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 4rem;

  & > .input {
    display: flex;
    justify-content: left;
    width: 100%;
  }

  @media (max-width: 1100px) {
    & > .input {
      width: 80vw;
      max-width: 32rem;
    }
  }

  @media (max-width: 500px) {
    margin-top: 3rem;

    & > .input {
      width: calc(80vw + 0.3rem);
      margin-top: 0.3rem;
    }
  }
`;

export const StyledPostTitleInput = styled.input`
  transform: translate(0, -100%);
  z-index: 1000;
  max-width: 100%;
  padding: 0.3rem 1.5rem;
  border: solid 0.1rem rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);
  transition: border 0.15s ease-in-out;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: rgba(241, 196, 123, 1);
  }

  @media (max-width: 500px) {
    transform: translate(0, 0);
    padding: 0.3rem 1.5rem;
  }
`;
