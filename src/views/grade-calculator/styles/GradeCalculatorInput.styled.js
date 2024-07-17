import styled from "styled-components";

export const StyledGradeCalculatorInput = styled.div`
  & .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
    transition: border-left 0.15s ease-in-out;
    border-left: 0.75rem solid ${({ theme }) => theme.colors.red};
    width: 22rem;
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
    width: 17rem;
  }

  @media (max-width: 400px) {
    & .wrapper {
      border-left-width: 0;
      width: 18rem;
    }

    & .wrapper:focus-within {
      border-left-width: 0.5rem;
    }

    & input {
      padding: 0.5rem 0.5rem;
      width: 3.5rem;
    }

    & label {
      padding: 0.5rem 0.5rem;
      width: 14.5rem;
    }
  }
`;
