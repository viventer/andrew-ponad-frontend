import styled from "styled-components";

export const StyledPostRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  width: 100%;
  gap: 2.5rem;

  &.onlyOneElement {
    height: fit-content;
  }

  & img {
    object-fit: contain;
    border-radius: 0.3rem;
  }

  & article {
    overflow: auto;
    height: fit-content;
  }
`;
