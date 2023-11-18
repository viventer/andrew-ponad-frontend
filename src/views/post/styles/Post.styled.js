import styled from "styled-components";

export const StyledThumbnailBar = styled.section`
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

  & img {
    object-fit: cover;
  }
`;
