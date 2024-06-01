import styled from "styled-components";

export const StyledErrorReportContentEditorImages = styled.section`
  & > div {
    position: relative;
  }

  & > div > img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
