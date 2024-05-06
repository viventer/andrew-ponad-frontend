import styled from "styled-components";

export const StyledSliderElement = styled.article`
  position: absolute;

  &.sliderElement0 {
    left: 0;
  }

  &.sliderElement1 {
    left: 12vw;
  }

  &.sliderElement2 {
    left: 28vw;
  }

  &.sliderElement0 img {
    height: 16vw;
  }

  &.sliderElement1 img {
    height: 19vw;
  }

  &.sliderElement2 img {
    height: 23vw;
  }

  @media (max-width: 1200px) {
    &.sliderElement0 {
      display: none;
    }

    &.sliderElement1 {
      left: 0;
    }

    &.sliderElement2 {
      left: 14vw;
    }
  }

  /* &:hover > article {
    display: block;
  } */
`;

export const StyledSliderPostInfo = styled.article`
  display: none;
`;
