import styled from "styled-components";

export const StyledPostContentEditor = styled.section`
  max-width: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  margin-top: 3rem;
  gap: 3rem;

  & .flex {
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 1rem;
  }

  .quillEditor {
    border: 0.1rem solid rgba(241, 196, 123, 0.5);
    height: auto;
    max-height: 100%;
    min-height: calc(20.25rem);
  }

  .quillEditor p,
  .quillEditor ul,
  .quillEditor ol {
    font-size: 1.1rem;
  }

  .ql-formats * {
    color: rgba(255, 255, 255, 0.5);
    stroke: rgba(255, 255, 255, 0.5);
  }

  .ql-picker-options {
    background-color: #181818;
  }

  .quillEditor h1 {
    font-size: 2rem;
  }

  .ql-container {
    width: 100%;
    border: none;
  }

  .ql-container .ql-editor {
    max-height: 50vh;
  }

  .ql-toolbar {
    border: none;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.5);
  }

  .responsivePostElement {
    position: relative;
  }

  .responsivePostElement > img {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  & > button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    border: 0.1rem solid ${({ theme }) => theme.colors.navy};
    transition: all 0.15s ease-in-out;
    width: 100%;
    box-shadow: inset 0 0 10rem rgba(21, 49, 92, 0.15);
    margin-bottom: 2rem;
  }

  & > button:hover {
    cursor: pointer;
    box-shadow: inset 20rem 0 10rem rgba(21, 49, 92, 0.2);
  }

  & > button:active {
    filter: brightness(1.75);
  }

  & > footer {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -10;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.15s ease-in-out;
    display: flex;
    justify-content: space-between;
  }

  & > footer > button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    border: 0.1rem solid rgba(21, 49, 92, 1);
    padding: 0.5rem 1rem;
    transition: all 0.15s ease-in-out;
    box-shadow: inset 0 0 5rem rgba(21, 49, 92, 0.3);
  }

  & > footer > button:hover {
    box-shadow: inset 2rem 0rem 5rem rgba(21, 49, 92, 0.5);
    cursor: pointer;
  }

  & > footer > button:active {
    filter: brightness(1.75);
  }

  @media (max-width: 1100px) {
    & > button {
      width: 80vw;
      max-width: 40rem;
    }
  }

  @media (max-width: 553px) {
    row-gap: 2.5rem;

    .ql-container {
      height: calc(100% - 65px);
    }
  }
`;

export const StyledRowTypeSelection = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(21, 49, 92, 0.15);
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  border-radius: 0.3rem;
  width: 100%;

  & > div:first-child {
    column-gap: 2rem;
    row-gap: 1rem;
    flex-wrap: wrap;
  }

  & div {
    display: flex;
    gap: 0.5rem;
    transition: all ease-in-out 0.15s;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
  }

  & div:hover {
    color: white;
  }

  & div:last-child:hover {
    color: rgb(255, 100, 100);
  }

  & div[selected="true"] {
    color: red;
  }

  @media (max-width: 1100px) {
    width: 80vw;
    max-width: 40rem;
  }
`;

export const StyledPostContentEditorRow = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .flex {
    max-width: fit-content;
  }

  & .flex:not(.active) {
    cursor: pointer;
  }

  & .flex:not(.active):hover {
    outline: 0.1rem solid #777;
    outline-offset: 0.4rem;
  }

  & .onlyOneElement .responsivePostElement {
    max-width: 75rem;
    max-height: calc(0.5625 * 75rem);
  }

  @media (max-width: 1600px) {
    & .onlyOneElement .responsivePostElement {
      max-width: 67rem;
      max-height: calc(0.5625 * 67rem);
    }
  }

  @media (max-width: 1414px) {
    & .onlyOneElement .responsivePostElement {
      width: 140vw;
      height: calc(0.5625 * 140vw);
      max-width: 59rem;
      max-height: calc(0.5625 * 59rem);
    }
  }

  @media (max-width: 1100px) {
    & .onlyOneElement .responsivePostElement {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 40rem;
      max-height: calc(22.5rem);
    }

    & .flex {
      width: 80vw;
      max-width: 40rem;
    }
  }

  & .onlyOneElement .quillEditor {
    height: 100%;
    max-height: calc(80vh + 42px);
  }

  & .onlyOneElement .ql-container {
    max-height: 80vh;
  }

  & .onlyOneElement .ql-editor {
    max-height: 80vh;
  }
`;
