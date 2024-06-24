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
    min-width: 14rem;
    width: 90%;
    padding: 0.25rem 0.5rem;
    transition: all 0.15s ease-in-out;
  }

  & input:focus {
    outline: none;
  }

  & input:focus-visible {
    border-left-width: 1.5rem;
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
`;
