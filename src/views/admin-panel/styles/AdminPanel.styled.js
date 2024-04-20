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
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
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
  }

  & nav li.selected {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & nav li:not(.selected):hover {
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
  }
`;
