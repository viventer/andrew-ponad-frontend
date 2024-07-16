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
    width: 100%;
    gap: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  }

  & li > div {
    border-left: 0.75rem solid rgba(0, 0, 0, 0);
    font-weight: 500;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    width: 5rem;
    text-align: left;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  & li.gradeObtained > div {
    border-left-color: ${({ theme }) => theme.colors.sunset};
  }

  & li > p {
    width: 8rem;
    text-align: end;
    padding-right: 1rem;
  }
`;
