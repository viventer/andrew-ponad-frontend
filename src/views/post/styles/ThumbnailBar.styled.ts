import styled from "styled-components";

export const StyledThumbnailBar = styled.section`
  & img {
    width: 90vw;
    height: calc(0.5625 * 90vw);
    max-width: 36rem;
    max-height: 20.25rem;
    object-fit: contain;
  }

  & img:first-child,
  & img:last-child {
    width: 80vw;
    height: calc(0.5625 * 80vw);
    max-width: 32rem;
    max-height: 18rem;
    filter: brightness(0.4) blur(0.15rem);
  }

  & img:first-child {
    margin-right: -5%;
  }

  & img:last-child {
    margin-left: -5%;
  }

  & img:nth-child(2) {
    z-index: 100;
  }

  @media (max-width: 1600px) {
    & img:first-child,
    & img:last-child {
      width: 70vw;
      height: calc(0.5625 * 70vw);
      max-width: 28rem;
      max-height: 15.25rem;
    }

    & img:first-child {
      margin-right: -10%;
    }

    & img:last-child {
      margin-left: -10%;
    }

    & img:nth-child(2) {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 32rem;
      max-height: 18rem;
    }
  }

  @media (max-width: 1414px) {
    & img:first-child,
    & img:last-child {
      width: 50vw;
      height: calc(0.5625 * 50vw);
      max-width: 20rem;
      max-height: 11.25rem;
    }

    & img:first-child {
      margin-right: -10%;
    }

    & img:last-child {
      margin-left: -10%;
    }

    & img:nth-child(2) {
      width: 70vw;
      height: calc(0.5625 * 70vw);
      max-width: 28rem;
      max-height: 15.75rem;
    }
  }

  @media (max-width: 1100px) {
    & img:last-child,
    & img:first-child {
      display: none;
    }
    & img:nth-child(2) {
      width: 80vw;
      height: calc(0.5625 * 80vw);
      max-width: 40rem;
      max-height: 22.5rem;
    }
  }

  @media (max-width: 800px) {
    &:not(.edit) {
      margin-bottom: 3rem;
    }

    &:not(.edit) img:nth-child(2) {
      width: calc(100vw - 4rem);
      height: calc(0.5625 * (100vw - 4rem));
      max-width: none;
      max-height: none;
    }
  }

  @media (max-width: 500px) {
    &:not(.edit) {
      margin-bottom: 0;
    }

    &:not(.edit) img {
      background-color: rgba(0, 0, 0, 0.5);
    }

    &:not(.edit) img:nth-child(2) {
      width: calc(100vw - 2rem);
      height: calc(0.5625 * (100vw - 2rem));
    }
  }
`;
