import styled from "styled-components";

export const StyledAdminPanelFilters = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 2rem;
  row-gap: 1rem;

  & button.down:first-of-type {
    min-width: 12.5rem;
  }

  & ul {
    transform: translate(0, calc(100% + 0.3rem));
  }

  @media (max-width: 1200px) {
    order: 2;
  }

  @media (max-width: 850px) {
    flex-wrap: wrap;

    & > nav {
      justify-content: left;
      max-width: 25rem;
    }
  }

  @media (max-width: 570px) {
    & > .postsFiltersIcon {
      display: none;
    }

    & > ul:first-of-type {
      z-index: 2000;
    }

    & > ul:first-of-type:has(.hide) {
      z-index: 1000;
    }
  }
`;
