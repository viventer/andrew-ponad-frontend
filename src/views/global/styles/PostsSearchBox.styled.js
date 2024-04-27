import styled from "styled-components";

export const StyledPostsSearchBox = styled.section`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);

  width: 100%;
  max-width: 35rem;
  background-color: gray;

  & .selectorIcon {
    color: ${({ theme }) => theme.colors.sunset};
  }
`;
