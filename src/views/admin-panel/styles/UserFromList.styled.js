import styled from "styled-components";

export const StyledUserFromList = styled.li`
  .shortInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    min-width: 37rem;
    gap: 1rem;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0 2rem;
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
    transform: translate(0, calc(100% + 0.3rem));
    z-index: 1000;
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

  & .shortInfo:nth-of-type(odd) {
    box-shadow: 0.15rem 0.15rem 0 ${({ theme }) => theme.colors.sunset};
  }

  & .shortInfo:nth-of-type(even) {
    box-shadow: 0.15rem 0.15rem 0 rgba(255, 255, 255, 0.5);
  }

  & > .shortInfo > div:first-of-type:hover {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & > .shortInfo button:not(.selectorButton) {
    color: white;
    background-color: rgba(0, 0, 0, 0);
    border: none;
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
    .shortInfo {
      min-width: 20rem;
      flex-wrap: wrap;
    }
  }
`;
