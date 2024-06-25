import styled from "styled-components";

export const StyledCategoryFromList = styled.li`
  gap: 0.5rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding-right: 1rem;
  border-left: 0.5rem solid ${({ theme }) => theme.colors.green};
  transition: all 0.15s ease-in-out;

  &.inputFocused,
  &.toBeAdded:hover {
    border-left-width: 1.5rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.17);
  }

  & .deleteButton {
    margin-left: 2rem;
  }

  & .deleteButton:hover .icon {
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
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
    margin: 0.25rem 0.5rem;
    gap: 0.25rem;
  }

  & .formatInfo .icon {
    color: ${({ theme }) => theme.colors.red};
  }

  &.unSaved {
    border-left-color: ${({ theme }) => theme.colors.sunset};
  }

  &.incorrectData {
    border-left-color: ${({ theme }) => theme.colors.red};
  }

  &.toBeAdded:hover {
    cursor: pointer;
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
`;
