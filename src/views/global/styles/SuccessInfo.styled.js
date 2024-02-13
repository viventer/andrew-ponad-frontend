import styled from "styled-components";

export const StyledSuccessInfo = styled.section`
  width: 100%;
  margin-top: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.green};
  padding: 1rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: rgba(123, 241, 137, 0.2);

  & > p {
    color: white;
  }
`;
