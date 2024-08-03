import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.3rem 1rem;
  white-space: nowrap;
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  border-radius: 0.3rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  box-shadow: inset 0 0 3rem rgba(21, 49, 92, 0.5);
  transition: box-shadow 0.15s ease-in-out;
  background: none;

  &[disabled] {
    filter: brightness(0.5);
  }

  & .icon {
    color: ${({ theme }) => theme.colors.sunset};
  }

  & .reactRouterLink {
    display: flex;
    align-items: center;
  }

  @media (hover: hover) {
    &:not([disabled]):hover {
      box-shadow: inset 3rem 0 2rem rgba(21, 49, 92, 1);
      cursor: pointer;
      outline: 0.1rem solid rgba(255, 255, 255, 0.3);
    }
  }
`;
