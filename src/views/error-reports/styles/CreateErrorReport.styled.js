import styled from "styled-components";

export const StyledCreateErrorReport = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  width: 40vw;
  max-width: 800px;
  max-height: 80vh;
  min-width: 500px;
  overflow-y: auto;

  & > button {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: ${({ theme }) => theme.colors.red};
    font-size: 2rem;
    transition: all 0.15s ease-in-out;
  }

  & > button:hover {
    cursor: pointer;
    transform: scale(75%);
  }

  & > button:active {
    color: white;
  }

  & > .flex {
    align-items: center;
    margin-bottom: 1.5rem;
  }

  & > .flex > h2 {
    font-size: 1.3rem;
    font-weight: 500;
  }

  & > .flex > .icon {
    color: ${({ theme }) => theme.colors.red};
    padding-right: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1.3rem;
    border-right: 0.1rem solid ${({ theme }) => theme.colors.red};
  }

  & .sunset {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & h3 {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: calc(100% - 45px);
    bottom: 0;
    right: 0;
    left: 0;
    top: 45px;
    transform: translate(0, 0);
    border: none;
  }

  @media (max-width: 340px) {
    .flex > .icon {
      display: none;
    }
  }
`;
