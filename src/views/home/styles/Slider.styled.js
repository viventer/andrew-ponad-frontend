import styled from "styled-components";

export const StyledSlider = styled.section`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1300px) {
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  @media (max-width: 500px) {
    height: 50vh;
  }
`;
