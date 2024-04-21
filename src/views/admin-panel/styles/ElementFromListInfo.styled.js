import styled from "styled-components";

export const StyledElementFromListInfo = styled.section`
  width: 50%;
  min-width: 37rem;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span {
    margin-right: 0.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.sunset};
  }
`;
