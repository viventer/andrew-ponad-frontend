import styled from "styled-components";

export const StyledPostInfo = styled.section`
  position: relative;
  width: 95vw;
  margin-left: auto;
  margin-right: auto;

  & div {
    position: absolute;
    transform: translateY(-100%);
    z-index: 1000;
    padding: 0.75rem 1.5rem;
    border-left: 0.75rem solid ${({ theme }) => theme.colors.navy};
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(0.5rem);
  }

  & h2 {
    margin-bottom: 0.75rem;
    font-size: 1.3rem;
    font-weight: bold;
  }

  & p {
    display: flex;
    align-items: center;
    line-height: 1.75rem;
    font-size: 1rem;
    font-weight: 700;
  }

  & p > span {
    margin-left: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & .icon {
    margin-right: 0.5rem;
    color: white;
  }

  @media (max-width: 800px) {
    width: 100vw;

    & div {
      transform: translateY(-100%);
      margin-top: 0rem;
      width: 100%;
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.navy};
      border-left: none;
    }

    & h2 {
      margin-bottom: 0.75rem;
      font-size: 1.25rem;
    }

    & p {
      line-height: 1.5rem;
      font-size: 0.9rem;
    }

    & p > span {
      margin-left: 0.9rem;
    }
  }

  @media (max-width: 500px) {
    & h2 {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    & div {
      transform: translateY(0);
      position: relative;
      padding: 1rem 1rem;
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
