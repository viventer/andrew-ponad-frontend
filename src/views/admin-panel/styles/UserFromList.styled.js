import styled from "styled-components";

export const StyledUserFromList = styled.li`
  & .shortInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 50%;
    min-width: 37rem;
    padding: 0 2rem;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }

  & .rightSectionWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    min-width: 18rem;
  }

  & > .shortInfo > div {
    display: flex;
    gap: 1rem;
  }

  & .rightSectionWrapper > div > ul {
    z-index: 1000;
    transform: translate(0, calc(100% + 0.3rem));
  }

  & .rightSectionWrapper > div > ul button {
    font-size: 0.8rem;
  }

  & .rightSectionWrapper > div > ul .icon {
    font-size: 1rem;
  }

  & .rightSectionWrapper > div > ul:has(.hide) {
    z-index: 1;
  }

  & .rightSectionWrapper > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 12rem;
    user-select: none;
    transition: all 0.15s ease-in-out;
  }

  &:nth-of-type(odd) .shortInfo {
    box-shadow: 0.15rem 0.15rem 0 ${({ theme }) => theme.colors.sunset};
  }

  &:nth-of-type(even) .shortInfo {
    box-shadow: 0.15rem 0.15rem 0 rgba(255, 255, 255, 0.5);
  }

  & > .shortInfo > div:first-of-type:hover {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & > .shortInfo button:not(.selectorButton) {
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.15s ease-in-out;
  }

  & .icon {
    font-size: 1.2rem;
  }

  & > .shortInfo button:not(.selectorButton):hover {
    color: ${({ theme }) => theme.colors.sunset};
    cursor: pointer;
  }

  & > .shortInfo button:not(.selectorButton):active {
    transform: scale(0.75);
  }

  & .successIcon {
    color: ${({ theme }) => theme.colors.green};
  }

  & .deleteIcon:hover {
    color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 730px) {
    & .shortInfo {
      row-gap: 0.5rem;
      flex-wrap: wrap;
      width: 95%;
      min-width: 0rem;
      padding: 0.5rem 2rem;
    }

    & .shortInfo > div:first-of-type {
      min-width: 12rem;
    }

    & .shortInfo .selectorButton {
      min-width: 10rem;
    }

    & .shortInfo .rightSectionWrapper {
      justify-content: left;
      gap: 3rem;
    }
  }

  @media (max-width: 390px) {
    & .shortInfo .rightSectionWrapper {
      gap: 2rem;
    }

    & ::-webkit-scrollbar {
      display: none;
    }

    & {
      scrollbar-width: 0;
    }

    & .shortInfo {
      padding: 0.5rem 1rem;
    }
  }

  @media (max-width: 350px) {
    & .shortInfo .rightSectionWrapper {
      gap: 1.5rem;
    }

    & .shortInfo {
      row-gap: 0.5rem;
      overflow: hidden;
    }
  }
`;
