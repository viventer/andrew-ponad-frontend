import styled from "styled-components";

export const StyledAdminPanelTab = styled.main`
  height: 80%;
  margin-top: 0.8rem;

  &.categoriesTab {
    width: 40%;
    justify-content: start;
    margin-left: 2rem;
  }

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

    &.categoriesTab {
      width: 50%;
    }
  }

  @media (max-width: 1000px) {
    &.categoriesTab {
      width: 60%;
    }
  }

  @media (max-width: 700px) {
    &.categoriesTab {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    &.categoriesTab {
      width: 90%;
      margin-left: auto;
    }
  }
`;
