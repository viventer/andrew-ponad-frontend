import styled from "styled-components";

export const StyledUserFromList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  gap: 2rem;

  & ul {
    transform: translate(0, calc(100% + 0.3rem));
  }

  & div:first-of-type {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 12rem;
  }
`;
