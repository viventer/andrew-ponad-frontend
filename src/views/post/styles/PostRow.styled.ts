import styled from "styled-components";

export const StyledPostRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  padding: 2.5rem;

  &.onlyOneElement {
    height: fit-content;
  }

  & img {
    object-fit: contain;
    border-radius: 0.3rem;
    border: 0.15rem solid rgba(255, 255, 255, 0.15);
  }

  & article {
    overflow-y: auto;
    height: fit-content;
    white-space: normal;
    overflow-wrap: break-word;
    padding-right: 0.75rem;
  }

  & .reactPlayerWrapper {
    box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 1100px) {
    &:not(.onlyOneElement) {
      flex-direction: column;
    }
  }

  @media (max-width: 450px) {
    padding: 2.5rem 0;
  }
`;
