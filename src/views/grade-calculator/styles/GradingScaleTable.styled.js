import styled from "styled-components";

export const StyledGradingScaleTable = styled.article`
  h2 {
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.navy};
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    list-style: none;
  }

  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  }

  & li > div {
    width: 5rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-left: 0.75rem solid rgba(0, 0, 0, 0);
    border-radius: 0.5rem 0 0 0.5rem;
    font-weight: 500;
    text-align: left;
    background: rgba(255, 255, 255, 0.1);
  }

  & li.gradeObtained > div {
    border-left-color: ${({ theme }) => theme.colors.sunset};
  }

  & li > p {
    width: 10rem;
    padding-right: 1rem;
    text-align: end;
  }
`;
