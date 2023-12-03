import styled from "styled-components";

export const StyledPostContentEditor = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 1rem;
  height: 100%;
  align-items: center;
  margin-top: 3rem;

  .quillEditor {
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
    font-size: 2rem;
  }

  .ql-container {
    width: 100%;
    height: calc(100% - 42px);
    border: none;
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

  @media (max-width: 553px) {
    row-gap: 2.5rem;
  }
`;
