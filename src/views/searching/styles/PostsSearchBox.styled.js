import styled from "styled-components";

export const StyledPostsSearchBox = styled.section`
  position: absolute;
  bottom: -0.5rem;
  transform: translateY(100%);
  width: 100%;
  max-width: 35rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 1rem;
  padding-bottom: 0;
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .selectorIcon {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & ul.selectorUl {
    transform: translate(0, calc(100% + 0.3rem));
    width: 50%;
    min-width: 13rem;
  }
`;
