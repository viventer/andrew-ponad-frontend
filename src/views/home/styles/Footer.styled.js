import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.darkGray};
  z-index: 100;

  & > button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    padding-left: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.red};
    background-color: rgba(0, 0, 0, 0);
  }

  & > button p {
    border-left: 0.15rem solid ${({ theme }) => theme.colors.red};
    padding-left: 0.5rem;
    color: white;
    transition: border-left 0.2s ease-in-out;
  }

  & > button:hover p {
    border-left-width: 0.5rem;
    cursor: pointer;
  }

  & > article {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.sunset};
  }

  & > article p {
    border-left: 0.15rem solid ${({ theme }) => theme.colors.sunset};
    padding-left: 0.5rem;
    color: white;
  }

  @media (max-width: 400px) {
    & > article span {
      display: none;
    }
  }
`;
