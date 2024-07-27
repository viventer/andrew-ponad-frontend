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

  ::selection {
    background: #ffb7b7; 
    color: #fff; 
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.sunset};
    color: #000; 
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
    height: calc(0.5625 * 90vw);
    max-height: calc(0.5625 * 36rem);
    max-width: 36rem;
  }

  .onlyOneElement {
    height: calc(0.5625 * 75rem);
  }
  
  .onlyOneElement .responsivePostElement {
    max-width: 75rem;
    max-height: calc(0.5625 * 75rem);
    height: 100%;
  }

  .deleteImgButton {
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    z-index: 10;
    padding: 0.5rem 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.red};
    border-radius: 100%;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.red};
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.15s ease-in-out;
  }

  .dropzoneWrapper {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 1600px) {
    .responsivePostElement {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 32rem;
      max-height: calc(18rem);
    }

    .onlyOneElement {
      height: calc(0.5625 * 67rem);
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

    .onlyOneElement {
      height: calc(0.5625 * 59rem);
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

    .onlyOneElement {
      height: 22.5rem;
    }
  }  
  
  @media (hover: hover) {
    & .deleteImgButton:hover {
      border-color: white;
      cursor: pointer;
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
