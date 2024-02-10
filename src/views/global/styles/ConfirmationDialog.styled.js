import styled from "styled-components";

export const StyledConfirmationDialog = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.1rem);
  z-index: 141414;

  & > dialog {
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    color: white;
    border: 0.1rem solid ${({ theme }) => theme.colors.navy};
    padding: 1rem 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    min-width: 25rem;
    max-width: 40rem;
  }

  & .icon {
    color: ${({ theme }) => theme.colors.sunset};
    font-size: 1.6rem;
    margin-right: 1rem;
  }

  & h2 > div {
    border-right: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & h2 {
    display: flex;
    gap: 1rem;
    align-items: start;
  }

  & > dialog > section {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1rem;
  }

  & button:first-of-type:hover {
    outline-color: ${({ theme }) => theme.colors.green};
  }

  & button:nth-of-type(2):hover {
    outline-color: ${({ theme }) => theme.colors.red};
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
`;
