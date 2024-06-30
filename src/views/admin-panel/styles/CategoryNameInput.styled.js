import styled from "styled-components";

export const StyledCategoryNameInput = styled.section`
  width: 100%;
  & > div {
    justify-content: space-between;
  }

  & > div,
  & .createNewButton {
    display: flex;
  }

  & input {
    width: 90%;
    min-width: 14.5rem;
    padding: 0.25rem 0.5rem;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }

  & input,
  & .createNewButton {
    font-size: 1rem;
    font-weight: 500;
    color: white;
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
    align-items: center;
    gap: 0.5rem;
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
