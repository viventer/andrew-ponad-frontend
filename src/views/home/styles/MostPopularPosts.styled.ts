import styled from "styled-components";

export const StyledMostPopularPosts = styled.section`
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  bottom: 4rem;
  transform: translateY(100%);
  width: 100%;

  & > h3 {
    width: fit-content;
    padding-bottom: 0.25rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    font-size: 1.3rem;
    font-weight: 500;
  }

  & > section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    justify-content: center;
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
  }

  & > button {
    display: none;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 1500px) {
    & > section {
      column-gap: 1rem;
      row-gap: 2rem;
    }
  }

  @media (max-width: 1300px) {
    bottom: -10rem;
  }

  @media (max-width: 1100px) {
    & > section {
      grid-template-columns: 1fr 1fr 1fr;
    }

    & > button {
      display: flex;
    }
  }

  @media (max-width: 800px) {
    & > section {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 500px) {
    & > section {
      grid-template-columns: 1fr;
    }
  }
`;
