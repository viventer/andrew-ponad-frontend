import styled from "styled-components";

export const StyledPostContent = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.sunset};

  & > section:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.75);
  }

  & h1 {
    font-size: 1.8rem;
  }

  & h2 {
    font-size: 1.4rem;
  }

  & p {
    font-size: 1.1rem;
  }

  @media (max-width: 650px) {
    margin-top: 0;
  }
`;
