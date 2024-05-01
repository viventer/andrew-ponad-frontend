import styled from "styled-components";

export const StyledPostFromList = styled.li`
  display: flex;
  flex-direction: column;
  width: fit-content;

  &.postsSearchResults {
    max-width: 95%;
  }

  &.postsSearchResults > .flex {
    max-width: 100%;
  }

  & > .info {
    width: 100%;
    min-width: 0;
  }

  &.postsSearchResults > .info {
    width: 100%;
  }

  & .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: fit-content;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.15s ease-in-out;
    position: relative;
  }

  & .flex:nth-of-type(odd) {
    box-shadow: 0.15rem 0.15rem 0 ${({ theme }) => theme.colors.sunset};
  }

  & .flex:nth-of-type(even) {
    box-shadow: 0.15rem 0.15rem 0 rgba(255, 255, 255, 0.5);
  }

  & .flex:hover {
    cursor: pointer;
  }

  & .flex:nth-of-type(odd):hover {
    box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.colors.sunset};
  }

  & .flex:nth-of-type(even):hover {
    box-shadow: 0.3rem 0.3rem 0 rgba(255, 255, 255, 0.5);
  }

  & .flex > button:first-of-type {
    color: white;
    background-color: rgba(0, 0, 0, 0.25);
    border: none;
    font-size: 1rem;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0.25rem 0.75rem;
    backdrop-filter: blur(0.1rem);
    text-align: center;
    transition: all 0.2s ease-in-out;
  }

  & .flex > button:first-of-type:hover {
    background-color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }

  & .flex > img {
    height: 3rem;
    width: calc(3rem / 9 * 16);
    object-fit: contain;
    transition: all 0.15s ease-in-out;
  }

  & .flex > div:first-of-type {
    min-width: 20rem;
  }

  & .flex > div:last-of-type {
    z-index: 999;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  & .flex > div > button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 1rem;
    color: white;
    transition: all 0.15s ease-in-out;
  }

  & .flex > div > button:hover {
    color: ${({ theme }) => theme.colors.sunset};
    cursor: pointer;
  }

  & .flex .deleteButton:hover {
    color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 650px) {
    padding-left: 0;

    &:not(.postsSearchResults) .flex > div:first-of-type {
      width: 35vw;
      min-width: 0;
    }
  }

  @media (max-width: 400px) {
    &:not(.postsSearchResults) .flex > div:first-of-type {
      width: 30vw;
    }

    &:not(.postsSearchResults) .flex > img {
      height: 2.5rem;
      width: calc(2.5rem / 9 * 16);
    }

    & .flex > div:last-of-type {
      gap: 1.5rem;
    }
  }
`;
