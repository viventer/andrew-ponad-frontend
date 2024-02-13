import styled from "styled-components";

export const StyledUserInfo = styled.div`
  & > button {
    display: flex;
    align-items: center;
    margin-left: 3rem;
    border: none;
    padding-left: 1rem;
    font-size: 1.5rem;
    color: white;
    background: none;
    box-shadow: -0.1rem 0 0 white;
    transition: all 0.15s ease-in-out;
  }

  & > article {
    position: absolute;
    right: 0;
    top: calc(100% + 0.1rem);
    z-index: 2000;
    min-width: 30rem;
    border: none;
    border-left: 0.1rem solid ${({ theme }) => theme.colors.navy};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.navy};
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
  }

  & > article > .flex {
    align-items: end;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 0.5rem;
  }

  & header.flex {
    justify-content: space-between;
    gap: 1rem;
  }

  & h2 {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    padding-bottom: 0.2rem;
    font-size: 1.4rem;
  }

  & .userInfo > section:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  & p {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & p > span {
    color: white;
    font-weight: 400;
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

  & .buttonsSection {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;
  }

  & .buttonsSection .reactRouterLink {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
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

    & section.flex-column button:last-child:hover {
      outline: none;
      box-shadow: inset 3rem 0 2rem rgba(255, 0, 0, 0.75);
    }
  }

  @media (max-width: 650px) {
    & > article {
      width: 100lvw;
      border-left: none;
    }
  }

  @media (max-width: 553px) {
    & section.flex-column > button:first-child {
      margin-top: 2rem;
    }

    & section.flex-column {
      align-items: center;
      width: 100%;
    }

    & section:last-child > button {
      justify-content: center;
      width: 100%;
    }

    & > article {
      min-width: 0;
    }

    & > article > .userInfo {
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }
  }

  @media (max-width: 450px) {
    .buttonsSection {
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
    }
  }

  @media (max-width: 385px) {
    & > button {
      margin-left: 1rem;
    }
  }
`;
