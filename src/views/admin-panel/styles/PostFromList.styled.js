import styled from "styled-components";

export const StyledPostFromList = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: fit-content;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.15s ease-in-out;

  &:nth-of-type(odd) {
    box-shadow: 0.15rem 0.15rem 0 ${({ theme }) => theme.colors.sunset};
  }

  &:nth-of-type(even) {
    box-shadow: 0.15rem 0.15rem 0 rgba(255, 255, 255, 0.5);
  }

  &:hover {
    cursor: pointer;
  }

  &:nth-of-type(odd):hover {
    box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.colors.sunset};
  }

  &:nth-of-type(even):hover {
    box-shadow: 0.3rem 0.3rem 0 rgba(255, 255, 255, 0.5);
  }

  & > img {
    height: 3rem;
    width: calc(3rem / 9 * 16);
    object-fit: contain;
    transition: all 0.15s ease-in-out;
  }

  & > div:first-of-type {
    min-width: 20rem;
  }

  & > div:last-of-type {
    z-index: 999;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  & > div > button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    font-size: 1rem;
    transition: all 0.15s ease-in-out;
  }

  & > div > button:hover {
    color: ${({ theme }) => theme.colors.sunset};
    cursor: pointer;
  }

  @media (max-width: 650px) {
    padding-left: 0;

    & > div:first-of-type {
      min-width: 0;
      width: 35vw;
    }
  }

  @media (max-width: 400px) {
    & > div:first-of-type {
      width: 30vw;
    }

    & > img {
      height: 2.5rem;
      width: calc(2.5rem / 9 * 16);
    }

    & > div:last-of-type {
      gap: 1.5rem;
    }
  }
`;
