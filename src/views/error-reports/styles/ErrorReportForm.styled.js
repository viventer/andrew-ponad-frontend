import styled from "styled-components";

export const StyledErrorReportForm = styled.form`
  & p {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  & > button {
    min-width: 200px;
    width: 20vw;
    justify-content: center;
  }

  @media (max-width: 450px) {
    & > button {
      width: 90vw;
    }
  }
`;
