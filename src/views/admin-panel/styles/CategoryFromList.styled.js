import styled from "styled-components";

export const StyledCategoryFromList = styled.li`
  gap: 0.5rem;
  width: 100%;
  padding-right: 1rem;
  border-left: 0.5rem solid ${({ theme }) => theme.colors.green};
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.15s ease-in-out;

  &.inputFocused {
    border-left-width: 1.5rem;
  }

  & .deleteButton {
    margin-left: 2rem;
  }

  & button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }

  & .icon {
    font-size: 1rem;
  }

  & .icon:not(.successIcon) {
    color: white;
  }

  & .flex {
    align-items: center;
  }

  & .formatInfo {
    gap: 0.25rem;
    margin: 0.25rem 0.5rem;
  }

  &.unSaved {
    border-left-color: ${({ theme }) => theme.colors.sunset};
  }

  &.incorrectData {
    border-left-color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 400px) {
    & > .flex {
      gap: 0;
      flex-direction: column;
      align-items: start;
      position: relative;
      padding-bottom: 0.25rem;
    }

    & .deleteButton {
      position: absolute;
      bottom: 0.25rem;
      left: 1rem;
    }
  }

  @media (hover: hover) {
    &.inputFocused,
    &.toBeAdded:hover {
      border-left-width: 1.5rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.17);
    }

    & .deleteButton:hover .icon {
      cursor: pointer;
    }

    & .deleteButton:hover .icon,
    & .formatInfo .icon {
      color: ${({ theme }) => theme.colors.red};
    }

    &.toBeAdded:hover {
      cursor: pointer;
    }
  }
`;
