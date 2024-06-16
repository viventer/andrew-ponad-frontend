import styled from "styled-components";

export const StyledErrorReportTitleInput = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  & > label {
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
  }

  & > input {
    border: 0.01rem solid rgba(255, 255, 255, 0.5);
    padding: 0.3rem 0.6rem;
    font-size: 1.1rem;
    color: white;
    background-color: rgba(255, 255, 255, 0);
    transition: all 0.15s ease-in-out;
  }

  & > input:focus {
    outline: none;
  }

  & > input:focus-visible {
    border-color: rgba(241, 196, 123, 1);
  }
`;
