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

  & > button {
    width: 100%;
    justify-content: center;
    display: none;
  }

  @media (max-width: 1500px) {
    & > section {
      gap: 1rem;
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
