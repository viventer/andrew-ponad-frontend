import styled from "styled-components";

export const StyledGradingScaleTable = styled.article`
  h2 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.navy};
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
    width: 100%;
  }

  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.05);
  }

  & li:nth-of-type(odd) {
  }

  & li.gradeObtained {
    border-left: 1rem solid ${({ theme }) => theme.colors.sunset};
  }

  & li > div {
    font-weight: 500;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 0;
    width: 5rem;
    text-align: center;
  }

  & li > p {
    padding-right: 1rem;
  }
`;
