import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: right;
  height: 100%;
  gap: 2rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    width: 3rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.05);
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.2);
    transition: all ease-in-out 0.15s;
    border-radius: 0.2rem;
  }

  .icon:hover {
    background-color: rgba(255, 255, 255, 0.15);
    border: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    & .icon {
      display: none;
    }
  }
`;
