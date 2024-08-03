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

  .videoElementWrapper {
    height: fit-content;
  }

  @media (hover: hover) {
    & .flex:not(.active):hover {
      outline: 0.1rem solid #777;
      outline-offset: 0.4rem;
    }
  }

  @media (max-width: 1100px) {
    & .flex {
      width: 80vw;
      max-width: 40rem;
    }
  }
`;
