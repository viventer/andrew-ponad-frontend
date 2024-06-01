import styled from "styled-components";

export const StyledCreateErrorReport = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
`;
