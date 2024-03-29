import styled from "styled-components";

export const StyledAdminPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    height: 80vh;
    margin-top: 5vh;
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    width: 90%;
    border-radius: 1rem;
  }

  & nav {
    position: sticky;
    top: 0;
  }

  & nav > ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 2rem;
    padding: 0.5rem 1.5rem;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.1);
    width: fit-content;
    border-radius: 1rem 0 1rem 0;
  }

  & nav li {
    padding-bottom: 0.2rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0);
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
