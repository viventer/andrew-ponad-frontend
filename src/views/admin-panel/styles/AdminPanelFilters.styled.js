import styled from "styled-components";

export const StyledAdminPanelFilters = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 2rem;
  row-gap: 1rem;

  & > .icon {
    margin-left: 0.5rem;
  }

  & button.down:first-of-type {
    min-width: 12.5rem;
  }

  & ul {
    transform: translate(0, calc(100% + 0.3rem));
  }

  @media (max-width: 850px) {
    flex-wrap: wrap;
    row-gap: 2rem;

    & > nav {
      justify-content: left;
      max-width: 25rem;
    }
  }

  @media (max-width: 570px) {
    row-gap: 1rem;

    & > nav {
      margin-top: 1rem;
    }

    & > .postsFiltersIcon {
      display: none;
    }

    & > ul:first-of-type {
      z-index: 999999;
    }

    & > ul:first-of-type:has(.hide) {
      z-index: 1000;
    }
  }
`;
