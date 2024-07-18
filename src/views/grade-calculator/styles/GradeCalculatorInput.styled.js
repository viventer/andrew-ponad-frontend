import styled from "styled-components";

export const StyledGradeCalculatorInput = styled.div`
  & .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 22rem;
    border-left: 0.75rem solid ${({ theme }) => theme.colors.red};
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.15);
    transition: border-left 0.15s ease-in-out;
  }

  & .wrapper.valid {
    border-left-color: ${({ theme }) => theme.colors.green};
  }

  & .wrapper:focus-within {
    border-left-width: 1.5rem;
  }

  & input {
    width: 5rem;
    height: 100%;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background-color: rgba(255, 255, 255, 0.15);
  }

  & input:focus {
    outline: none;
  }

  & label {
    width: 17rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 400px) {
    & .wrapper {
      width: 18rem;
      border-left-width: 0;
    }

    & .wrapper:focus-within {
      border-left-width: 0.5rem;
    }

    & input {
      width: 3.5rem;
      padding: 0.5rem 0.5rem;
    }

    & label {
      width: 14.5rem;
      padding: 0.5rem 0.5rem;
    }
  }
`;
