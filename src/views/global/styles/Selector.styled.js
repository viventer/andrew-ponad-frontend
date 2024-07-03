import styled from "styled-components";

export const StyledSelector = styled.ul`
  position: relative;
  z-index: 99999;

  & > .selectorOptions {
    position: absolute;
    top: -0.3rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    white-space: nowrap;
  }
`;

export const StyledSelectorOption = styled.li`
  list-style: none;

  & .flex-center {
    gap: 0.5rem;
  }

  & > button {
    width: 100%;
    border: none;
    padding: 0.5rem;
    text-align: left;
    font-size: 0.9rem;
    color: white;
    transition: all 0.1s ease-in-out;
    background-color: ${({ theme }) => theme.colors.darkGray};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > button:hover {
    background-color: #3a3a3a;
    cursor: pointer;
  }

  & > button.selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    min-width: 12rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.navy};
    font-weight: 700;
    z-index: 1;
  }

  & > button.selected.down {
    transform: translate(0, calc(-100% - 0.3rem));
    z-index: -10;
    position: relative;
  }

  & > button.selected.up {
    height: 2.5rem;
  }
`;
