import styled from "styled-components";

export const StyledSearchBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  z-index: 3000;

  & input,
  & .icon {
    border: 0.1rem solid rgba(255, 255, 255, 0.4);
    padding: 0.4rem 1rem;
    font-size: 1rem;
    color: white;
    transition: all ease-in-out 0.15s;
    box-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.2);
  }

  & input {
    width: 100%;
    border-right: none;
    border-radius: 2rem 0 0 2rem;
    background-color: rgba(0, 0, 0, 0);
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
    display: flex;
    align-items: center;
    width: 100%;
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

  &.searchBoxSearchBar {
    display: none;
  }

  @media (max-width: 650px) {
    &:not(.adminPanelSearchBar) {
      width: fit-content;
    }

    &:not(.adminPanelSearchBar) input {
      display: none;
    }

    &.searchBoxSearchBar input {
      display: block;
    }

    &.searchBoxSearchBar {
      display: block;
      margin: 1rem;
      margin-top: 0;
      width: calc(100% - 2rem);
    }

    &:not(.adminPanelSearchBar, .searchBoxSearchBar) .icon {
      border: none;
      padding: 0;
      font-size: 1.4rem;
      background: none;
      box-shadow: none;
    }
  }
`;
