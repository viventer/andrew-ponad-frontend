import styled from "styled-components";

export const StyledPostContentEditor = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 5rem;
  row-gap: 1rem;
  height: 100%;
  align-items: center;
  margin-top: 2rem;

  .quillEditor {
    width: 30vw;
    height: calc(0.5625 * 30vw - 42px);
    margin-bottom: 42px;
  }

  .quillEditor p,
  .quillEditor ul,
  .quillEditor ol {
    font-size: 1.1rem;
  }

  .quillEditor h1 {
    font-size: 2rem;
  }

  .ql-container {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1414px) {
    .quillEditor {
      width: 70vw;
      height: calc(0.5625 * 70vw - 42px);
      max-width: 28rem;
      max-height: calc(15.75rem - 42px);
    }
  }

  @media (max-width: 1100px) {
    .quillEditor {
      width: 80vw;
      height: calc(0.5625 * 80vw - 42px);
      max-width: 40rem;
      max-height: calc(22.5rem - 42px);
    }
  }
`;
