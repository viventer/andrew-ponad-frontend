import styled from "styled-components";

export const StyledAdminPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & .adminPanelListWrapper {
    height: 60vh;
  }

  & > div {
    width: 90%;
    max-width: 1400px;
    margin-top: 5vh;
    margin-bottom: 5vh;
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    height: 82vh;
    min-height: 500px;
  }

  & nav {
    position: sticky;
    top: 0;
  }

  & nav > ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: fit-content;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem 0 1rem 0;
    font-weight: 500;
    list-style: none;
    background-color: rgba(255, 255, 255, 0.1);
  }

  & nav li {
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0);
    padding-bottom: 0.2rem;
    transition: all 0.15s ease-in-out;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  & nav li.selected {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  @media (max-width: 600px) {
    & .navIcon {
      display: none;
    }
  }

  @media (max-width: 500px) {
    & nav > ul {
      gap: 1.5rem;
      width: 100%;
      border-radius: 1rem 1rem 0 0;
      justify-content: center;
    }
  }

  @media (max-width: 400px) {
    & nav > ul {
      justify-content: left;
      gap: 2rem;
    }

    & > div nav li p {
      display: none;
    }

    & .navIcon {
      font-size: 1.2rem;
      display: block;
      transition: all 0.15s ease-in-out;
    }
  }

  @media (hover: hover) {
    & nav li:not(.selected):hover {
      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
      cursor: pointer;
    }
  }
`;
