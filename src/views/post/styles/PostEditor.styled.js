import styled from "styled-components";

export const StyledPostEditor = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 4rem;

  @media (max-width: 500px) {
    margin-top: 3rem;
  }
`;

export const StyledPostTitleInput = styled.input`
  position: absolute;
  top: 100%;
`;
