import styled from "styled-components";

export const StyledUserInfo = styled.div`
  & > button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    box-shadow: -0.1rem 0 0 white;
    margin-left: 3rem;
    padding-left: 1rem;
    transition: all 0.15s ease-in-out;
  }

  & > button:hover {
    cursor: pointer;
    box-shadow: -0.5rem 0 0 ${({ theme }) => theme.colors.sunset};
  }

  & > article {
    position: absolute;
    right: 0;
    top: calc(100% + 0.1rem);
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-left: 0.1rem solid ${({ theme }) => theme.colors.navy};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.navy};
    border-right: none;
    z-index: 2000;
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  & > article.visible {
    opacity: 1;
  }

  & header.flex {
    justify-content: space-between;
    gap: 1rem;
  }

  & h2 {
    padding-bottom: 0.2rem;
    font-size: 1.4rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & section:first-of-type {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  & p {
    color: ${({ theme }) => theme.colors.sunset};
    font-weight: 700;
  }

  & p > span {
    color: white;
    font-weight: 400;
  }

  & section > button {
    background: none;
    color: white;
    border: 0.1rem solid ${({ theme }) => theme.colors.navy};
    padding: 0.2rem 1rem;
    font-size: 1.1rem;
    width: fit-content;
    margin-top: -0.5rem;
    font-weight: 700;
    box-shadow: inset 0 0 3rem rgba(21, 49, 92, 0.5);
    transition: all 0.15s ease-in-out;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    transition: all 0.15s ease-in-out;
  }

  & section > button:hover {
    box-shadow: inset 3rem 0 3rem rgba(21, 49, 92, 0.75);
    cursor: pointer;
  }

  & section:last-child {
    padding-top: 1.5rem;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & section:last-child > button:last-child {
    border-color: red;
    box-shadow: inset 0 0 3rem rgba(255, 0, 0, 0.5);
  }

  & section:last-child > button:last-child:hover {
    box-shadow: inset 3rem 0 3rem rgba(255, 0, 0, 0.75);
  }

  & > article .flex:last-child {
    gap: 2rem;
  }
`;

export const StyledButton = styled.button`
  background: none;
  color: white;
  border: 0.1rem solid ${({ theme }) => theme.colors.navy};
  padding: 0.2rem 1rem;
  font-size: 1.1rem;
  width: fit-content;
  margin-top: -0.5rem;
  font-weight: 700;
  box-shadow: inset 0 0 3rem rgba(21, 49, 92, 0.5);
  transition: all 0.15s ease-in-out;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  transition: all 0.15s ease-in-out;

  &:hover {
    box-shadow: inset 3rem 0 3rem rgba(21, 49, 92, 0.75);
    cursor: pointer;
  }
`;
