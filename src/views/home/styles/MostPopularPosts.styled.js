import styled from "styled-components";

export const StyledMostPopularPosts = styled.section`
  z-index: 9999999;
  width: 100%;
  position: absolute;
  bottom: 4rem;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 0.1rem solid red;

  & > h3 {
    font-size: 1.3rem;
    font-weight: 500;
    padding-bottom: 0.25rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    width: fit-content;
  }

  & > section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    width: 100%;
    gap: 2rem;
    margin: 0 auto;
    justify-content: center;
    width: 100%;
    border: 0.1rem solid pink;
  }

  @media (max-width: 1500px) {
    & > section {
      gap: 1rem;
    }
  }
`;
