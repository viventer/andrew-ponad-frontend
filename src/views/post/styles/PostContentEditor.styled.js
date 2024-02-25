import styled from "styled-components";

export const StyledPostContentEditor = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  max-width: fit-content;
  margin-top: 3rem;

  & .flex {
    column-gap: 3rem;
    row-gap: 1rem;
    flex-wrap: wrap;
  }

  .quillEditor {
    height: auto;
    max-height: 100%;
    min-height: calc(20.25rem);
    border: 0.1rem solid rgba(241, 196, 123, 0.5);
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
    font-size: 1.8rem;
  }

  .quillEditor h2 {
    font-size: 1.4rem;
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
    width: 100%;
    margin-bottom: 5rem;
    padding: 2rem;
    font-size: 1.4rem;
    justify-content: center;
    box-shadow: inset 0 0 0rem rgba(21, 49, 92, 0.5);
  }

  & > button:not([disabled]):hover {
    box-shadow: inset 10rem 0 0rem rgba(21, 49, 92, 1);
    outline: none;
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
