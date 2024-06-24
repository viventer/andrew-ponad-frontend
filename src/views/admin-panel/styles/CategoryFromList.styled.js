import styled from "styled-components";

export const StyledCategoryFromList = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 30%;
  background-color: rgba(255, 255, 255, 0.1);
  padding-right: 1rem;

  & .deleteButton {
    margin-left: 1rem;
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
    color: white;
  }
`;
