import styled from "styled-components";

export const StyledPostFromSection = styled.article`
  &:not(.post0, .post1, .post2, .post3, .post4) {
    display: none;
  }
  background-color: rgba(0, 0, 0, 0.5);

  & .thumbnailWrapper {
    position: relative;
  }

  & img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: contain;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & .postViews {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.3rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.navy};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.5);
  }

  & .postViews .icon {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & p {
    padding: 0.5rem 0.75rem;
  }

  @media (max-width: 1400px) {
    &.post4 {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    &.post3 {
      display: none;
    }

    &.isExpanded.post3,
    &.isExpanded.post4,
    &.isExpanded.post5 {
      display: block;
    }
  }

  @media (max-width: 800px) {
    &.post2 {
      display: none;
    }

    &.isExpanded.post2 {
      display: block;
    }
  }

  @media (max-width: 500px) {
    &.post1 {
      display: none;
    }

    &.isExpanded.post1 {
      display: block;
    }
  }
`;
