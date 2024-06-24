import styled from "styled-components";

export const StyledCategoryFromList = styled.li`
  gap: 0.5rem;
  width: 40%;
  background-color: rgba(255, 255, 255, 0.1);
  padding-right: 1rem;
  border-left: 0.5rem solid ${({ theme }) => theme.colors.green};

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

  &.incorrectData {
    border-left-color: ${({ theme }) => theme.colors.red};
  }

  &.unSaved {
    border-left-color: ${({ theme }) => theme.colors.sunset};
  }
`;
