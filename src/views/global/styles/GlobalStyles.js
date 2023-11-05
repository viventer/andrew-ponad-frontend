import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    color: white;
    background-color: ${({ theme }) => theme.colors.almostBlack};
    margin-bottom: 2rem;
  }
  main {
    width: 95%;
    margin-right: auto;
    margin-left: auto;
  }

  .flex {
    display: flex;
  }

  .reactRouterLink {
    color: white;
    text-decoration: none;
  }

  .hide {
    display: none;
  }

  .bold {
    font-weight: 700;
  }
`;
