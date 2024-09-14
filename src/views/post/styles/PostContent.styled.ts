import styled from "styled-components";

export const StyledPostContent = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.sunset};

  & > section:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.7);
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

  & ul,
  & li {
    list-style-position: inside;
  }

  @media (max-width: 800px) {
    margin-top: 0;
  }
`;
