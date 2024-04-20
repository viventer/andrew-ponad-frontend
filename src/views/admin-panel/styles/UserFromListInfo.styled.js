import styled from "styled-components";

export const StyledUserFromListInfo = styled.section`
  width: 50%;
  min-width: 37rem;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.05);

  & span {
    margin-right: 0.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.sunset};
  }
`;
