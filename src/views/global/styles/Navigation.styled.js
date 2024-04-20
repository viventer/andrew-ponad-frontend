import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 2rem;
  height: 100%;

  & .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 2rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    border-radius: 0.2rem;
    font-size: 1.2rem;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.2);
    transition: all ease-in-out 0.15s;
  }

  @media (max-width: 1100px) {
    & .icon {
      display: none;
    }
  }

  @media (hover: hover) {
    .icon:hover {
      border: 0.1rem solid ${({ theme }) => theme.colors.sunset};
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;
