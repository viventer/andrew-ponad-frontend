import styled from "styled-components";

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

  & .onlyOneElement .responsivePostElement {
    max-width: 75rem;
    max-height: calc(0.5625 * 75rem);
  }

  @media (hover: hover) {
    & .flex:not(.active):hover {
      outline: 0.1rem solid #777;
      outline-offset: 0.4rem;
    }
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
