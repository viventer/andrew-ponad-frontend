import styled from "styled-components";

export const StyledPostInfo = styled.section`
  position: relative;
  width: 95vw;
  margin-left: auto;
  margin-right: auto;

  & div {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    transform: translateY(-100%);
    z-index: 1000;
    backdrop-filter: blur(1rem);
    padding: 1rem 2rem;
    border-left: 0.75rem solid ${({ theme }) => theme.colors.navy};
  }

  & h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 1.25rem;
  }

  & p {
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  & p > span {
    font-weight: 400;
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & .icon {
    margin-right: 0.5rem;
    color: white;
  }

  @media (max-width: 800px) {
    & h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 650px) {
    width: 80vw;

    & div {
      position: relative;
      transform: translateY(0%);
      margin-top: 1rem;
      border-left: 0.5rem solid ${({ theme }) => theme.colors.navy};
    }

    & h2 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    & p {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }

    & p > span {
      margin-left: 0.9rem;
    }
  }

  @media (max-width: 450px) {
    & h2 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    & div {
      padding: 0.5rem 1rem;
      border-left: 0.25rem solid ${({ theme }) => theme.colors.navy};
    }
  }
`;
