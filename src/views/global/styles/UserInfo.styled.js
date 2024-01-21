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
    border: none;
    min-width: 30rem;
    z-index: 2000;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-left: 0.1rem solid ${({ theme }) => theme.colors.navy};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.navy};
    display: none;
  }

  & > article.visible {
    display: block;
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

  & div > section:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
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

  & section.flex-column {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: fit-content;
    height: 100%;
  }

  & section:last-child > button {
    width: 100%;
  }

  & section.flex-column button:last-child {
    border-color: red;
    box-shadow: inset 0 0 3rem rgba(255, 0, 0, 0.5);
  }

  & section.flex-column button:last-child:hover {
    box-shadow: inset 3rem 0 2rem rgba(255, 0, 0, 0.75);
    outline: none;
  }

  & .buttonsSection {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }

  & .buttonsSection .reactRouterLink {
    width: 100%;
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    font-size: 1.25rem;
  }

  & .buttonsSection p {
    color: white;
  }

  @media (hover: hover) {
    & > button:hover {
      cursor: pointer;
      box-shadow: -0.5rem 0 0 ${({ theme }) => theme.colors.sunset};
    }
  }

  @media (max-width: 650px) {
    & > article.visible {
      width: 100lvw;
      border-left: none;
    }
  }

  @media (max-width: 553px) {
    & section.flex-column > button:first-child {
      margin-top: 2rem;
    }

    & > article {
      min-width: 0;
    }

    & > article > .flex:last-child {
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }

    & section.flex-column {
      align-items: center;
      width: 100%;
    }

    & section:last-child > button {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 450px) {
    .buttonsSection {
      flex-direction: column;
      margin-top: 2rem;
      gap: 1rem;
    }
  }

  @media (max-width: 385px) {
    & > button {
      margin-left: 1rem;
    }
  }
`;
