import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  height: 80vh;
  width: 70vw;
  margin: 0 auto 0 auto;
  position: relative;
  overflow-x: hidden;

  & .headingSection {
    position: absolute;
    right: 0;
    padding: 0.75rem 2rem;
    border-left: 0.5rem solid ${({ theme }) => theme.colors.sunset};
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    transform: translateY(50%);
  }

  & .headingSection > h2 {
    font-size: 2rem;
    font-weight: 700;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    width: fit-content;
    padding-bottom: 0.25rem;
    margin-bottom: 0.75rem;
  }

  & .headingSection span {
    color: ${({ theme }) => theme.colors.sunset};
    margin-right: 0.5rem;
    margin-top: 0.1rem;
  }

  & .headingSection div {
    font-size: 1.3rem;
    display: flex;
  }

  @media (max-width: 2200px) {
    width: 74vw;
  }

  @media (max-width: 1930px) {
    width: 77vw;
  }

  @media (max-width: 1700px) {
    width: 81vw;

    & .headingSection {
      transform: translateY(25%);
    }
  }

  @media (max-width: 1450px) {
    width: 85vw;

    & .headingSection {
      transform: translateY(0);
    }
  }

  @media (max-width: 1350px) {
    & .headingSection > h2 {
      font-size: 1.7rem;
    }

    & .headingSection div {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1300px) {
    height: 28vw;
    margin-top: 3rem;
    overflow-x: visible;
    justify-content: end;

    & .headingSection {
      position: absolute;
      right: auto;
      bottom: -1.5rem;
      transform: translateY(100%);
    }
  }

  @media (max-width: 1050px) {
    height: 32vw;
  }

  @media (max-width: 800px) {
    height: 36vw;
    width: 90vw;
  }

  @media (max-width: 650px) {
    height: 44vw;

    & .headingSection {
      border-left-width: 0.1rem;
    }
  }

  @media (max-width: 550px) {
    & .headingSection {
      padding: 0.5rem 1rem;
      width: 100%;
    }

    & .headingSection > h2 {
      font-size: 1.4rem;
      padding-bottom: 0.2rem;
      margin-bottom: 0.4rem;
    }

    & .headingSection div {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    height: calc(90vw / 1.78);
    justify-content: center;
    overflow-x: visible;
  }

  @media (max-width: 400px) {
    & .headingSection {
      padding: 0.4rem 0.8rem;
    }

    & .headingSection div {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 360px) {
    & .headingSection .icon {
      display: none;
    }
    & .headingSection span {
      margin: 0;
    }
  }
`;
