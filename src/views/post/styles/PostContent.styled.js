import styled from "styled-components";

export const StyledPostContent = styled.section`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;

  & > section:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.3);
  }

  & > section:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
