import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 0.7rem 0 rgba(241, 196, 123, 1);

  & .flex {
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }

  & .reactRouterLink {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & .reactRouterLink:hover {
    filter: brightness(1.1);
  }

  & .reactRouterLink:active {
    filter: brightness(1.2);
  }
`;

export const StyledSearchBar = styled.nav`
  & input {
    background-color: ${({ theme }) => theme.colors.navy};
    border: none;
  }
`;
