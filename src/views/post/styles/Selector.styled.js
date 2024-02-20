import styled from "styled-components";

export const StyledSelector = styled.ul`
  z-index: 1000;
  position: relative;
  & > .selectorOptions {
    position: absolute;
    top: -0.3rem;
    display: flex;
    white-space: nowrap;
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledSelectorOption = styled.li`
  & > button {
    width: 100%;
    border: none;
    text-align: left;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: white;
    font-size: 0.9rem;
    transition: all 0.05s ease-in-out;
  }

  & > button:hover {
    filter: brightness(150%);
    cursor: pointer;
  }

  & > button.selected {
    display: flex;
    gap: 1rem;
    min-width: 12rem;
    align-items: center;
    justify-content: space-between;
    border: 0.1rem solid ${({ theme }) => theme.colors.navy};
    font-weight: 700;
  }

  & > button.selected.down {
    transform: translate(0, calc(-100% - 0.3rem));
  }

  & > button.selected.up {
    height: 2.5rem;
  }

  list-style: none;
`;
