import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.darkGray};
  z-index: 9999;

  h1 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & h1 > .icon {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & > .flex {
    justify-content: left;
    align-items: center;
    gap: 3rem;
    width: 100%;
    padding: 0.5rem 0;
  }

  & h1 > .reactRouterLink {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    font-size: 1.5rem;
    font-weight: 300;
    color: white;
    transition: all ease-in-out 0.15s;
  }

  & h1 > .reactRouterLink .icon {
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    color: ${({ theme }) => theme.colors.sunset};
    transition: all ease-in-out 0.15s;
    box-shadow: 0.1rem 0 0 white;
  }

  & h1 > .reactRouterLink:active {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & > button {
    display: flex;
    align-items: center;
    margin-left: 3rem;
    border: none;
    padding-left: 1rem;
    font-size: 1.5rem;
    color: white;
    background: none;
    box-shadow: -0.1rem 0 0 white;
    transition: all 0.15s ease-in-out;
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

  @media (max-width: 400px) {
    & > .flex {
      gap: 1rem;
    }
  }

  @media (hover: hover) {
    & h1 > .reactRouterLink:hover .icon {
      box-shadow: 0.5rem 0 0 ${({ theme }) => theme.colors.sunset};
    }

    & > button:hover {
      cursor: pointer;
      box-shadow: -0.5rem 0 0 ${({ theme }) => theme.colors.sunset};
    }
  }

  @media (max-width: 370px) {
    & h1 > .reactRouterLink > p {
      display: none;
    }
  }
`;
