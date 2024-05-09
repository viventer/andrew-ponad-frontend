import styled from "styled-components";

export const StyledSlider = styled.section`
  display: flex;
  align-items: center;

  position: relative;

  @media (max-width: 1300px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  @media (max-width: 500px) {
    height: 50vh;
    overflow: hidden;
  }
`;
