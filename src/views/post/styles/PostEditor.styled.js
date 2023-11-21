import styled from "styled-components";

export const StyledPostEditor = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 4rem;

  & section {
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%);
    text-align: center;
    z-index: 200;
    width: 90vw;
    height: calc(0.5625 * 90vw);
    max-width: 36rem;
    max-height: 20.25rem;
  }

  @media (max-width: 1500px) {
    & section {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 32rem;
      max-height: 18rem;
    }
  }

  @media (max-width: 1300px) {
    & section {
      width: 70vw;
      height: calc(0.5625 * 70vw);
      max-width: 28rem;
      max-height: 15.75rem;
    }
  }

  @media (max-width: 500px) {
    & section {
      font-size: 1rem;
      width: 90vw;
      height: calc(0.5625 * 90vw);
      max-width: 36rem;
      max-height: 20.25rem;
    }

    margin-top: 3rem;
  }
`;

export const StyledPostTitleInput = styled.input`
  position: absolute;
  top: 100%;
  left: 0;
  transform: translate(0, -100%);
  background-color: rgba(0, 0, 0, 0.25);
  border: solid 0.1rem rgba(241, 196, 123, 1);
  font-size: 1.5rem;
  color: white;
  padding: 0.3rem 0.75rem;
  font-weight: 500;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 1rem rgba(241, 196, 123, 0.75);
  }
`;
