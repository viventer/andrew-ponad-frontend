import styled from "styled-components";

export const StyledPostsSearchResults = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 40vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0.5rem 0;
  margin-left: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 930px) {
    max-height: 60vh;
  }
`;
