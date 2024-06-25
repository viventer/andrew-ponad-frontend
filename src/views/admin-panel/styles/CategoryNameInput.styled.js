import styled from "styled-components";

export const StyledCategoryNameInput = styled.section`
  width: 100%;
  & > div {
    display: flex;
    justify-content: space-between;
  }

  & input {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    min-width: 14.5rem;
    width: 90%;
    padding: 0.25rem 0.5rem;
  }

  & input:focus {
    outline: none;
  }

  & .saveButton:disabled {
    filter: brightness(0.5);
  }

  & .successIcon {
    color: ${({ theme }) => theme.colors.green};
  }

  & .saveButton:hover .icon:not(.successIcon),
  & .editButton:hover .icon:not(.successIcon) {
    color: ${({ theme }) => theme.colors.sunset};
    cursor: pointer;
  }

  & .createNewButton {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    margin: 0.25rem 0.5rem;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    & div {
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
    }

    & .saveButton,
    & .editButton {
      margin-left: 0.5rem;
    }
  }
`;
