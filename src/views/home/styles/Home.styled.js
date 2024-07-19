import styled from "styled-components";

export const StyledHome = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  height: 60vh;
  width: 70vw;
  margin: 0 auto 0 auto;

  border: 0.1rem solid green;

  & .headingSection {
    position: absolute;
    right: 0;
    z-index: 10;
    transform: translateY(50%);
    padding: 0.75rem 2rem;
    border-left: 0.5rem solid ${({ theme }) => theme.colors.sunset};
    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.5);
  }

  & .headingSection > h2 {
    width: fit-content;
    margin-bottom: 0.75rem;
    padding-bottom: 0.25rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    font-size: 2rem;
    font-weight: 700;
  }

  & .headingSection span {
    margin-right: 0.5rem;
    margin-top: 0.1rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & .headingSection div {
    display: flex;
    font-size: 1.3rem;
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
    justify-content: end;
    height: 28vw;
    /* overflow-x: visible; */
    margin-top: 3rem;

    & .headingSection {
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
      width: 100%;
      padding: 0.5rem 1rem;
    }

    & .headingSection > h2 {
      margin-bottom: 0.4rem;
      padding-bottom: 0.2rem;
      font-size: 1.4rem;
    }

    & .headingSection div {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
    height: calc(90vw / 1.78);
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

  @media (orientation: portrait) {
    margin-top: 15vh;
  }
`;
