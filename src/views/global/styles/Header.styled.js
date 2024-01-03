import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0 1rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  position: relative;

  & .flex {
    gap: 3rem;
    justify-content: left;
    align-items: center;
    width: 100%;
    padding-right: 2rem;
    padding: 0.5rem 0;
  }

  & .reactRouterLink {
    color: ${({ theme }) => theme.colors.sunset};
    white-space: nowrap;
    transition: all ease-in-out 0.15s;
    font-size: 1.5rem;
  }

  & .reactRouterLink:hover {
    filter: brightness(1.1);
  }

  & .reactRouterLink:active {
    filter: brightness(1.2);
  }

  @media (max-width: 650px) {
    &.flex {
      gap: 0;
    }

    & > .flex {
      justify-content: space-between;
      width: 100%;
    }
  }
`;

export const StyledSearchBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & input,
  & .icon {
    padding: 0.5rem 1rem;
    box-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.2);
    font-size: 1rem;
    transition: all ease-in-out 0.15s;
    color: white;
    border: 0.1rem solid rgba(255, 255, 255, 0.4);
  }

  & input {
    background-color: rgba(0, 0, 0, 0);
    border-right: none;
    border-radius: 2rem 0 0 2rem;
    width: 100%;
  }

  & input::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  & input:focus {
    outline: none;
  }

  & input:focus-visible {
    border: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    border-right: none;
  }

  & form {
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 35rem;
  }

  & .icon {
    border-left: none;
    border-radius: 0 2rem 2rem 0;
    background-color: rgba(255, 255, 255, 0.15);
  }

  & input:focus-visible + .icon {
    border: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    border-left: none;
  }

  @media (max-width: 650px) {
    width: fit-content;

    & input {
      display: none;
    }

    & .icon {
      border: none;
      background: none;
      box-shadow: none;
      font-size: 1.4rem;
      padding: 0;
    }
  }
`;
