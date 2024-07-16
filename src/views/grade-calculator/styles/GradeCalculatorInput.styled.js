import styled from "styled-components";

export const StyledGradeCalculatorInput = styled.div`
  & .wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
    transition: box-shadow 0.15s ease-in-out;
    border-left: 0.75rem solid ${({ theme }) => theme.colors.red};
  }

  & .wrapper.valid {
    border-left-color: ${({ theme }) => theme.colors.green};
  }

  & .wrapper:focus-within {
    border-left-width: 1.5rem;
  }

  & input {
    width: 5rem;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    border: none;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
    font-weight: 500;
  }

  & input:focus {
    outline: none;
  }

  & label {
    padding: 0.5rem 1rem;
    width: 16rem;
  }

  & .wrapper:focus-within label {
    width: 15.25rem;
  }
`;
