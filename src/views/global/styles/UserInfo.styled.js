import styled from "styled-components";

export const StyledUserInfo = styled.div`
  & > button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    box-shadow: -0.1rem 0 0 white;
    margin-left: 3rem;
    padding-left: 1rem;
    transition: all 0.15s ease-in-out;
    display: flex;
    align-items: center;
  }

  & > article {
    position: absolute;
    right: 0;
    top: calc(100% + 0.1rem);
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-left: 0.1rem solid ${({ theme }) => theme.colors.navy};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.navy};
    border-right: none;
    z-index: 2000;
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  & > article.visible {
    opacity: 1;
  }

  & header.flex {
    justify-content: space-between;
    gap: 1rem;
  }

  & h2 {
    padding-bottom: 0.2rem;
    font-size: 1.4rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & section:first-of-type {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  & p {
    color: ${({ theme }) => theme.colors.sunset};
    font-weight: 700;
  }

  & p > span {
    color: white;
    font-weight: 400;
  }

  & > article > .flex {
    align-items: end;
    justify-content: space-between;
    margin-top: 0.5rem;
    gap: 2rem;
  }

  & section:last-child {
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
    height: 100%;
  }

  & section:last-child > button {
    width: 100%;
  }

  & section:last-child > button:last-child {
    border-color: red;
    box-shadow: inset 0 0 3rem rgba(255, 0, 0, 0.5);
  }

  & section:last-child > button:last-child:hover {
    box-shadow: inset 3rem 0 2rem rgba(255, 0, 0, 0.75);
  }

  @media (hover: hover) {
    & > button:hover {
      cursor: pointer;
      box-shadow: -0.5rem 0 0 ${({ theme }) => theme.colors.sunset};
    }
  }

  @media (max-width: 650px) {
    & > article {
      width: 100lvw;
      border-left: none;
    }
  }

  @media (max-width: 553px) {
    & > article > .flex:last-child {
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }

    & section:last-child {
      margin-top: 2rem;
      align-items: center;
      width: 100%;
    }

    & section:last-child > button {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 385px) {
    & > button {
      margin-left: 1rem;
    }
  }
`;
