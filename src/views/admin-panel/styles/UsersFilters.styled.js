import styled from "styled-components";

export const StyledUsersFilters = styled.section`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  row-gap: 1rem;

  & > nav {
    justify-content: left;
    max-width: 25rem;
  }

  & ul {
    transform: translate(0, calc(100% + 0.3rem));
  }
`;
