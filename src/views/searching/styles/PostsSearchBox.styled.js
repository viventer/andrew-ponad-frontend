import styled from "styled-components";

export const StyledPostsSearchBox = styled.section`
  position: absolute;
  bottom: -0.5rem;
  transform: translateY(100%);
  width: 100%;
  max-width: 35rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  z-index: 0;

  & .selectorIcon {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & ul.selectorUl {
    transform: translate(0, calc(100% + 0.3rem));
  }
`;
