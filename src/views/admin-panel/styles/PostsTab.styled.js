import styled from "styled-components";

export const StyledPostsTab = styled.main`
  margin-top: 0.8rem;
  height: 80%;

  & > .flex {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 1rem;
  }

  @media (max-width: 1200px) {
    & > .flex {
      flex-direction: column;
      align-items: start;
    }
  }
`;

export const StyledPostsList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledAddPostButton = styled.button`
  color: white;
  border: none;
  font-size: 1.1rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  background-color: rgba(255, 255, 255, 0.15);
  gap: 0.5rem;
  padding-left: 1rem;
  transition: all 0.15s ease-in-out;

  & > .icon {
    background-color: ${({ theme }) => theme.colors.navy};
    font-size: 1.25rem;
    padding: 0.5rem;
    border-radius: 50%;
  }

  &:hover {
    box-shadow: 0.2rem 0.2rem 0 ${({ theme }) => theme.colors.sunset};
    cursor: pointer;
  }

  &:active {
    transform: translate(0.2rem, 0.2rem);
    box-shadow: none;
  }

  @media (max-width: 1200px) {
    order: 1;
  }
`;
