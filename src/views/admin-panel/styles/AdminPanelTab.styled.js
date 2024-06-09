import styled from "styled-components";

export const StyledAdminPanelTab = styled.main`
  height: 80%;
  margin-top: 0.8rem;

  & > .flex {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 1rem;
  }

  @media (max-width: 1200px) {
    & > .flex {
      flex-direction: column;
      align-items: start;
    }
  }
`;
