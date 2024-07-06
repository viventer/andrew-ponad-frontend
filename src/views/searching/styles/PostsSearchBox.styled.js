import styled from "styled-components";

export const StyledPostsSearchBox = styled.section`
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  z-index: 99;
  transform: translateY(100%);
  width: 100%;
  max-width: 35rem;
  min-height: 17rem;
  padding-top: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.darkGray};

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
    justify-content: center;
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 930px) {
    position: fixed;
    bottom: unset;
    top: 3.075rem;
    transform: none;
    width: 100vw;
    max-width: 100vw;

    border-left: none;
    border-right: none;
  }

  @media (max-width: 650px) {
    top: 2.7125rem;
  }
`;
