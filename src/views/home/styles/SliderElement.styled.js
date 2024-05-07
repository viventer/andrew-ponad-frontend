import styled from "styled-components";

export const StyledSliderElement = styled.article`
  position: absolute;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.75);
  transition: left 0.5s ease-in-out, opacity 0.5s ease-in-out;

  & img {
    object-fit: contain;
    transition: all 0.5s ease-in-out;
    transition: filter 0s;
  }

  &.sliderElement0 {
    left: 0;
    filter: blur(2px) brightness(0.6);
    z-index: 0;
  }

  &.sliderElement1 {
    left: 10vw;
    filter: blur(1px) brightness(0.8);
    z-index: 1;
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
    transition: all 0.5s ease-in-out;
    height: 10vw;
    width: calc(10vw * 1.78);
  }

  & div {
    position: absolute;
    padding: 0.75rem 1.25rem;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    width: 100%;
    font-size: 1.3rem;
    font-weight: 500;
    opacity: 0;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    transition: opacity 1s ease-in-out 0.5s, border-top 1s ease-in-out 0.5s,
      filter 0.5s ease-in-out 0s, font-size 0.5s ease-in-out 0s;
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

  &.sliderElement2:hover {
    cursor: pointer;
  }

  &.sliderElement2:hover img {
    filter: brightness(1.1);
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
`;

export const StyledSliderPostInfo = styled.article`
  opacity: 0;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.sunset};
  box-shadow: 0.1rem 0.1rem;
  transition: opacity 0.3s ease-in-out;

  & span {
    color: white;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  & .icon {
    color: white;
    margin-right: 0.4rem;
    width: 1rem;
  }
`;
