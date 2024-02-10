import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  color: white;
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  padding: 0.2rem 1rem;
  font-size: 1.1rem;
  width: fit-content;
  font-weight: 700;
  box-shadow: inset 0 0 3rem rgba(21, 49, 92, 0.5);
  transition: all 0.15s ease-in-out;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  transition: box-shadow 0.15s ease-in-out;
  white-space: nowrap;

  &:hover {
    box-shadow: inset 3rem 0 2rem rgba(21, 49, 92, 1);
    cursor: pointer;
    outline: 0.1rem solid rgba(255, 255, 255, 0.3);
  }

  & .icon {
    color: ${({ theme }) => theme.colors.sunset};
  }
`;
