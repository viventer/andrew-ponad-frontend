import styled from "styled-components";

export const StyledPostsSearchBox = styled.section`
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  min-height: 17rem;
  max-width: 35rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 1rem 0;
  padding-bottom: 0;
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  & .selectorIcon {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & ul.selectorUl {
    transform: translate(0, calc(100% + 0.3rem));
    width: 50%;
    min-width: 13rem;
    margin-left: 1rem;
  }

  & > button {
    width: 100%;
    border-radius: 0;
    justify-content: center;
  }

  @media (max-width: 930px) {
    width: 100vw;
    max-width: 100vw;
    position: fixed;
    bottom: unset;
    top: 3.075rem;
    transform: none;
  }

  @media (max-width: 650px) {
    top: 2.7125rem;
  }
`;
