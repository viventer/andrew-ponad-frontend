import styled from "styled-components";

export const StyledRowTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  border-radius: 0.3rem;
  font-size: 1.2rem;
  background-color: rgba(21, 49, 92, 0.15);

  & > div:first-child {
    column-gap: 2rem;
    row-gap: 1rem;
    flex-wrap: wrap;
  }

  & div {
    display: flex;
    gap: 0.5rem;
    transition: all ease-in-out 0.15s;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
  }

  & .barRightSide {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  @media (hover: hover) {
    & div:hover {
      color: white;
    }

    & .deleteIcon:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  @media (max-width: 1100px) {
    width: 80vw;
    max-width: 40rem;
  }

  @media (max-width: 800px) {
    & .barRightSide {
      gap: 2rem;
    }
  }
`;
