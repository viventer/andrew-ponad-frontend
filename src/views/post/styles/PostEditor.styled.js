import styled from "styled-components";

export const StyledPostEditor = styled.main`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  & img {
    width: 90vw;
    height: calc(0.5625 * 90vw);
    max-width: 36rem;
    max-height: 20.25rem;
  }
`;

export const StyledImageDropzone = styled.div`
  border: 0.15rem dashed rgba(255, 255, 255, 0.15);
  background-color: rgba(255, 255, 255, 0.01);
  width: 90vw;
  height: calc(0.5625 * 90vw);
  max-width: 36rem;
  max-height: 20.25rem;
  border-spacing: 1rem;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%);
  z-index: 200;

  & .icon,
  & .change-icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & .change-icon {
    font-size: 7rem;
    filter: opacity(0);
  }

  & .change-paragraph {
    filter: opacity(0);
    font-size: 1.75rem;
    font-weight: 500;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
    transition: all 0.15s ease-in-out;
    width: 100%;
    height: 100%;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    border-width: 0.3rem;
  }

  &:hover > .hover-effect {
    background-color: rgba(0, 0, 0, 0.75);
  }

  & .change-icon,
  & .change-paragraph {
    transition: all 0.15s ease-in-out;
  }

  &:hover .change-icon,
  &:hover .change-paragraph {
    filter: opacity(1);
  }
`;
