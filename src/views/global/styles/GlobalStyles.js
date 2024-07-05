import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    font-family: 'Ubuntu', sans-serif;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    line-height: inherit;
  }

  body {
    color: white;
    background-color: black;
    background-color: ${({ theme }) => theme.colors.almostBlack};
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

  .transparent {
    visibility: hidden;
  }

  .bold {
    font-weight: 700;
  }

  .transition {
    transition: all 0.15s ease-in-out;
  }

  .blur {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(0.1rem);
  }

  .maxZIndex {
    z-index: 99999999;
  }

  .almostMaxZIndex {
    z-index: 99999998;
  }

  .responsivePostElement {
    width: 90vw;
    max-width: 36rem;
  }
  
  .onlyOneElement {
  }

  .onlyOneElement .responsivePostElement {
    max-width: 75rem;
  }

  @media (max-width: 1600px) {
    .responsivePostElement {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 32rem;
      max-height: calc(18rem);
    }


    .onlyOneElement .responsivePostElement {
      max-width: 67rem;
      max-height: calc(0.5625 * 67rem);
    }
  }

  @media (max-width: 1414px) {
    .responsivePostElement {
      width: 70vw;
      height: calc(0.5625 * 70vw);
      max-width: 28rem;
      max-height: calc(15.75rem);
    }

    .onlyOneElement .responsivePostElement {
      width: 140vw;
      max-width: 59rem;
      max-height: calc(0.5625 * 59rem);
    }
  }

  @media (max-width: 1100px) {
    .responsivePostElement {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 40rem;
      max-height: calc(22.5rem);
    }

    .onlyOneElement .responsivePostElement {
      width: 80vw;
      max-width: 40rem;
      max-height: calc(22.5rem);
    }

  }

  .onlyOneElement .quillEditor {
    height: 100%;
    max-height: calc(80vh + 42px);
  }

  .onlyOneElement .ql-container {
    max-height: 80vh;
  }

  .onlyOneElement .ql-editor {
    max-height: 80vh;
  }
`;
