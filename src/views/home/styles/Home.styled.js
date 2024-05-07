import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  align-items: center;
  height: 94vh;
  /* border: 0.1rem solid red; */
  width: 78vw;
  max-width: 1600px;
  margin: 0 auto 0 auto;
  position: relative;

  & .container {
    display: flex;
    align-items: center;
  }

  & .headingSection {
    position: absolute;
    right: 0;
    padding: 0.75rem 2rem;
    border-left: 0.5rem solid ${({ theme }) => theme.colors.sunset};
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    transform: translateY(50%);
  }

  & .headingSection > h2 {
    font-size: 2rem;
    font-weight: 700;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.sunset};
    width: fit-content;
    padding-bottom: 0.25rem;
    margin-bottom: 0.75rem;
  }

  & .headingSection span {
    color: ${({ theme }) => theme.colors.sunset};
    margin-right: 0.5rem;
    font-size: 1.3rem;
    margin-top: 0.1rem;
  }

  & .headingSection div {
    font-size: 1.3rem;
    display: flex;
  }
`;
