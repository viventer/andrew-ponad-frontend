import styled from "styled-components";

export const StyledErrorReportFromListDetails = styled.section`
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  min-width: 37rem;
  width: 75%;

  & .reportTitle {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    padding-bottom: 0.2rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    overflow-x: hidden;
  }

  & h3 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  & article {
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }

  & .images {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & img {
    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & > button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
    transition: all 0.15s ease-in-out;
  }

  & > button:hover {
    color: ${({ theme }) => theme.colors.sunset};
    cursor: pointer;
  }

  & > button > h3 {
    margin-bottom: 0;
  }

  & .creationDate {
    margin-top: 1rem;
  }

  & span {
    color: ${({ theme }) => theme.colors.sunset};
    font-weight: 500;
  }

  @media (max-width: 1150px) {
    width: 95%;
  }

  @media (max-width: 650px) {
    & .reportTitle {
      font-size: 1.1rem;
    }
  }
`;
