import styled from "styled-components";

export const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 5rem;
  padding-left: 1rem;
  font-size: 1.1rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
  transition: all 0.15s ease-in-out;

  & > .icon {
    padding: 0.5rem;
    font-size: 1.25rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.navy};
  }

  &:active {
    transform: translate(0.2rem, 0.2rem);
    box-shadow: none;
  }

  @media (max-width: 1200px) {
    order: 1;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0.2rem 0.2rem 0 ${({ theme }) => theme.colors.sunset};
      cursor: pointer;
    }
  }
`;
