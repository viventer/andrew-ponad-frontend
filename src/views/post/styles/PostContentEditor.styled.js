import styled from "styled-components";

export const StyledPostContentEditor = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  height: 100%;

  .quillEditor {
    min-height: 100%;
  }

  .quillEditor p {
    font-size: 1.1rem;
  }

  .quillEditor h1 {
    font-size: 2rem;
  }
`;
