import styled from "styled-components";

export const StyledPostEditor = styled.main`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 4rem;

  @media (max-width: 500px) {
    margin-top: 3rem;
  }
`;

export const StyledPostTitleInput = styled.input`
  background-color: rgba(0, 0, 0, 0.25);
  border: solid 0.1rem rgba(241, 196, 123, 1);
  font-size: 1.5rem;
  color: white;
  padding: 0.3rem 0.75rem;
  font-weight: 500;
  width: 20%;
  transform: translate(0, -100%);

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0.5rem rgba(241, 196, 123, 0.5);
  }
`;
