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
    height: calc(100% - 42px);
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
`;
