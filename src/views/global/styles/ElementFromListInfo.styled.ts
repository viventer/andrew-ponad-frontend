import styled from "styled-components";

export const StyledElementFromListInfo = styled.section`
  width: 50%;
  min-width: 37rem;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.sunset};

  & span {
    margin-right: 0.5rem;
    font-weight: 700;
    color: white;
  }

  & .icon {
    color: white;
    margin-right: 0.4rem;
    width: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;
