import styled from "styled-components";

export const StyledConfirmationDialog = styled.article`
  position: fixed;
  bottom: 0;
  z-index: 141414;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(0.1rem);
  background-color: rgba(0, 0, 0, 0.25);

  & > dialog {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 25rem;
    max-width: 40rem;
    margin-right: auto;
    margin-left: auto;
    border: 0.1rem solid ${({ theme }) => theme.colors.navy};
    padding: 1rem 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    background-color: ${({ theme }) => theme.colors.darkGray};
  }

  & .icon {
    margin-right: 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & h2 {
    display: flex;
    align-items: start;
    gap: 1rem;
  }

  & h2 > div {
    border-right: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & > dialog > section {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1rem;
  }

  @media (max-width: 800px) {
    & > dialog {
      max-width: 35rem;
      min-width: 20rem;
    }

    & h2 {
      font-size: 1.1rem;
    }

    & .icon {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 650px) {
    & > dialog {
      width: 90%;
      max-width: 90%;
      min-width: 90%;
    }
  }

  @media (max-width: 450px) {
    & h2 {
      font-size: 1rem;
    }

    & .icon {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 350px) {
    & h2 > div {
      display: none;
    }

    h2 {
    }
  }

  @media (hover: hover) {
    & button:first-of-type:hover {
      outline-color: ${({ theme }) => theme.colors.green};
    }

    & button:nth-of-type(2):hover {
      outline-color: ${({ theme }) => theme.colors.red};
    }
  }
`;
