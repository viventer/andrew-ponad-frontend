import styled from "styled-components";

export const StyledErrorReportFromListDetails = styled.section`
  width: 75%;
  min-width: 37rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);

  & .reportTitle {
    overflow-x: hidden;
    margin-bottom: 1rem;
    padding-bottom: 0.2rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    font-size: 1.3rem;
  }

  & h3 {
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  & article {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
  }

  & .images {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  & img {
    width: 100%;
    max-width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    object-fit: contain;
  }

  & > button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.15s ease-in-out;
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
    min-width: 0;
  }

  @media (max-width: 650px) {
    & .reportTitle {
      font-size: 1.1rem;
    }
  }

  @media (hover: hover) {
    & > button:hover {
      color: ${({ theme }) => theme.colors.sunset};
      cursor: pointer;
    }
  }
`;
