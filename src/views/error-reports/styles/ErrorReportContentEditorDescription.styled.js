import styled from "styled-components";

export const StyledErrorReportContentEditorDescription = styled.section`
  margin-bottom: 1rem;

  .red {
    color: ${({ theme }) => theme.colors.red};
  }

  .green {
    color: ${({ theme }) => theme.colors.green};
  }

  & > h3 {
    margin-bottom: 0.2rem;
  }

  & .quill {
    outline: none;
    max-width: 100%;
  }

  & .ql-toolbar {
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
  }

  & .ql-editor {
    height: 12rem;
  }

  & .ql-container {
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
  }

  .quill p,
  .quill ul,
  .quill ol {
    font-size: 1.1rem;
    font-weight: 300;
  }

  & strong {
    font-weight: 500;
  }

  .ql-formats * {
    color: rgba(255, 255, 255, 0.5);
    stroke: rgba(255, 255, 255, 0.5);
  }

  .ql-picker-options {
    background-color: #181818;
  }

  .quill h1 {
    font-size: 1.8rem;
  }

  .quill h2 {
    font-size: 1.4rem;
  }
`;
