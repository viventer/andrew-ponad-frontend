import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    line-height: inherit;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    color: white;
    background-color: black;
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

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
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

  .transition {
    transition: all 0.15s ease-in-out;
  }

  .responsivePostElement {
    width: 90vw;
    height: calc(0.5625 * 90vw);
    max-width: 36rem;
    max-height: calc(20.25rem);
  }

  .hashLoader {
    position: fixed;
    left: 50vw;
    top: 40vh;
}

  @media (max-width: 1600px) {
    .responsivePostElement {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 32rem;
      max-height: calc(18rem);
    }
  }

  @media (max-width: 1414px) {
    .responsivePostElement {
      width: 70vw;
      height: calc(0.5625 * 70vw);
      max-width: 28rem;
      max-height: calc(15.75rem);
    }
  }

  @media (max-width: 1100px) {
    .responsivePostElement {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 40rem;
      max-height: calc(22.5rem);
    }
  }


`;
