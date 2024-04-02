import styled from "styled-components";

export const StyledUserFromListInfo = styled.section`
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  width: 100%;
  width: 50%;
  min-width: 37rem;

  & span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.sunset};
    margin-right: 0.5rem;
  }
`;
