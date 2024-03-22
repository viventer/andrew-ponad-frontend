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
    overflow: auto;
    height: fit-content;
  }

  @media (max-width: 1100px) {
    &:not(.onlyOneElement) {
      flex-direction: column;
    }
  }
`;
