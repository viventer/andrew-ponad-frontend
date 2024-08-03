import styled from "styled-components";

export const StyledSliderPostInfo = styled.article`
  position: absolute;
  top: 0;
  opacity: 0;
  padding: 0.5rem 1rem;
  box-shadow: 0.1rem 0.1rem;
  backdrop-filter: blur(4px);
  color: ${({ theme }) => theme.colors.sunset};
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease-in-out;

  & span {
    margin-right: 0.5rem;
    font-weight: bold;
    color: white;
  }

  & .icon {
    width: 1rem;
    margin-right: 0.4rem;
    color: white;
  }

  @media (max-width: 650px) {
    font-size: 0.9rem;
  }
`;
