import styled from "styled-components";

export const StyledSliderElement = styled.article`
  position: absolute;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.75);
  transition: left 1s ease-in-out, opacity 1s ease-in-out;

  & img {
    object-fit: contain;
    transition: all 1s ease-in-out;
    transition: filter 0s;
  }

  &.sliderElement0 {
    left: 0;
    z-index: 0;
    filter: blur(2px) brightness(0.6);
  }

  &.sliderElement1 {
    left: 10vw;
    z-index: 1;
    filter: blur(1px) brightness(0.8);
  }

  &.sliderElement2 {
    left: 24vw;
    z-index: 2;
  }

  &.sliderElement3 {
    left: 48vw;
    z-index: 0;
    opacity: 0;
  }

  &.sliderElement0 img {
    height: 10vw;
    width: calc(10vw * 1.78);
  }

  &.sliderElement1 img {
    height: 14vw;
    width: calc(14vw * 1.78);
  }

  &.sliderElement2 img {
    height: 19vw;
    width: calc(19vw * 1.78);
  }

  &.sliderElement3 img {
    height: 14vw;
    width: calc(14vw * 1.78);
    transition: all 1s ease-in-out;
  }

  & div {
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0;
    padding: 0.75rem 1.25rem;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    backdrop-filter: blur(4px);
    font-size: 1.3rem;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 1s ease-in-out 0.5s, border-top 1s ease-in-out 0.5s,
      filter 1s ease-in-out 0s, font-size 1s ease-in-out 0s;
  }

  &.sliderElement2 div {
    opacity: 1;
  }

  &.sliderElement3 div {
    filter: opacity(0);
    font-size: 0;
  }

  &.sliderElement2:hover > article {
    opacity: 1;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover img {
    filter: brightness(1.1);
  }

  @media (max-width: 1600px) {
    &.sliderElement0 img {
      height: 14vw;
      width: calc(14vw * 1.78);
    }

    &.sliderElement1 img {
      height: 18vw;
      width: calc(18vw * 1.78);
    }

    &.sliderElement2 img {
      height: 22vw;
      width: calc(22vw * 1.78);
    }

    &.sliderElement3 img {
      height: 18vw;
      width: calc(18vw * 1.78);
    }
  }

  @media (max-width: 1300px) {
    transition: left 1s ease-in-out, transform 1s ease-in-out;

    &.sliderElement0 {
      left: 0;
      display: block;
      filter: blur(1px) brightness(0.8);
    }

    &.sliderElement1 {
      left: 50%;
      z-index: 2;
      filter: blur(0) brightness(1);
      transform: translateX(-50%);
    }

    &.sliderElement2 {
      left: auto;
      right: 0;
      z-index: 1;
      filter: blur(1px) brightness(0.8);
    }

    &.sliderElement3 {
      display: none;
    }

    &.sliderElement0 img,
    &.sliderElement2 img {
      height: 20vw;
      width: calc(20vw * 1.78);
    }

    &.sliderElement1 img {
      height: 28vw;
      width: calc(28vw * 1.78);
      transition: all 0.5s ease-in-out;
    }

    &.sliderElement2 div {
      opacity: 0;
    }

    &.sliderElement1 div {
      opacity: 1;
    }

    &.sliderElement1:hover > article {
      opacity: 1;
    }

    &.sliderElement1:hover {
      cursor: pointer;
    }

    &.sliderElement1:hover img {
      filter: brightness(1.1);
    }

    &.sliderElement2 div {
      font-size: 0;
      filter: opacity(0);
    }
  }

  @media (max-width: 1050px) {
    &.sliderElement0 img,
    &.sliderElement2 img {
      height: 22vw;
      width: calc(22vw * 1.78);
    }

    &.sliderElement1 img {
      height: 32vw;
      width: calc(32vw * 1.78);
      transition: all 0.5s ease-in-out;
    }
  }

  @media (max-width: 800px) {
    & div {
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
    }

    &.sliderElement0 img,
    &.sliderElement2 img {
      height: 24vw;
      width: calc(24vw * 1.78);
    }

    &.sliderElement1 img {
      height: 36vw;
      width: calc(36vw * 1.78);
      transition: all 0.5s ease-in-out;
    }
  }

  @media (max-width: 650px) {
    &.sliderElement2 {
      left: 75%;
      right: unset;
      transform: translateX(-100%);
      opacity: 0;
      transition: opacity 1s ease-in-out, left 1s ease-in-out;
    }

    &.sliderElement1 {
      left: 100%;
      transform: translateX(-100%);
    }

    &.sliderElement1 img {
      height: 44vw;
      width: calc(44vw * 1.78);
    }

    &.sliderElement0 img {
      height: 30vw;
      width: calc(30vw * 1.78);
    }

    & div {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 500px) {
    &.sliderElement0 img,
    &.sliderElement1 img,
    &.sliderElement2 img {
      height: calc(90vw / 1.78);
      width: 90vw;
    }

    &.sliderElement0,
    &.sliderElement2 {
      opacity: 0;
      transition: transform 1s ease-in-out, opacity 1s ease-in-out;
    }

    &.sliderElement0 {
      left: 0;
      right: unset;
      transform: translateX(-35%);
    }

    &.sliderElement2 {
      left: 100%;
      right: unset;
      transform: translateX(35%);
    }
  }
`;
