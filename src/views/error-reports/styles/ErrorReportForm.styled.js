import styled from "styled-components";

export const StyledErrorReportForm = styled.form`
  & p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  & > button {
    width: 20vw;
    min-width: 200px;
    justify-content: center;
  }

  @media (max-width: 450px) {
    & > button {
      width: 90vw;
    }
  }
`;
