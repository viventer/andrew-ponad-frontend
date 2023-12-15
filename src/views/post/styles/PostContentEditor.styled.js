import styled from "styled-components";

export const StyledPostContentEditor = styled.section`
  max-width: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: left;
  margin-top: 3rem;
  gap: 3rem;

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

  & button {
    border: none;
    background-color: rgba(21, 49, 92, 0.15);
    color: white;
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    border: 0.1rem solid ${({ theme }) => theme.colors.navy};
    transition: filter 0.15s ease-in-out;
  }

  & button:hover {
    cursor: pointer;
    filter: brightness(1.25);
  }

  & button:active {
    filter: brightness(1.75);
  }

  @media (max-width: 553px) {
    row-gap: 2.5rem;
  }
`;

export const StyledRowTypeSelection = styled.div`
  display: flex;
  column-gap: 2rem;
  row-gap: 1rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(21, 49, 92, 0.15);
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  border-radius: 0.3rem;
  width: 100%;
  flex-wrap: wrap;

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

  @media (max-width: 1100px) {
    width: 80vw;
    max-width: 40rem;
  }
`;

export const StyledPostContentEditorRow = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

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
  }
`;
