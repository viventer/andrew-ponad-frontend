import styled from "styled-components";

export const StyledThumbnailBar = styled.section`
  max-width: 100%;

  & img {
    width: 90vw;
    width: 100%;
    height: calc(0.5625 * 90vw);
    max-width: 36rem;
    max-height: 20.25rem;
    object-fit: cover;
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

  @media (max-width: 1500px) {
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

  @media (max-width: 1300px) {
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

  @media (max-width: 1000px) {
    & img:last-child,
    & img:first-child {
      display: none;
    }
  }

  @media (max-width: 500px) {
    & img:nth-child(2) {
      width: 90vw;
      height: calc(0.5625 * 90vw);
      max-width: 36rem;
      max-height: 20.25rem;
    }
  }
`;
