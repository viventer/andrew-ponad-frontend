import styled from "styled-components";

export const StyledPostContentEditor = styled.section`
  max-width: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: left;
  margin-top: 3rem;

  & .flex {
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 1rem;
  }

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

export const StyledRowTypeSelection = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(21, 49, 92, 0.15);
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  border-radius: 0.3rem;

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

  & div[selected="true"] {
    color: red;
  }
`;
