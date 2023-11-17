import styled from "styled-components";

export const StyledPostEditor = styled.main`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  & .icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.sunset};
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    border-width: 0.3rem;
  }
`;
