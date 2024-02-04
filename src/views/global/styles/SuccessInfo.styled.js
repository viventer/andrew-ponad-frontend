import styled from "styled-components";

export const StyledSuccessInfo = styled.section`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
  background-color: rgba(123, 241, 137, 0.2);
  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.green};

  & > p {
    color: white;
  }
`;
