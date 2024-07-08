import styled from "styled-components";

export const StyledErrorReportContentEditorImages = styled.section`
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 0.3rem;
  }

  & > div {
    position: relative;
    display: flex;
    justify-content: center;
    width: fit-content;
    margin-bottom: 1rem;
  }

  & > div > img {
    top: 0;
    z-index: -1;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
  }

  & > div > img {
    position: absolute;
  }

  & .imageDropzone {
    width: 20vw;
    max-width: 400px;
    height: calc(20vw * 0.5625);
    max-height: calc(400px * 0.5625);
  }

  & .imageDropzone .hover-effect {
    gap: 0.5rem;
  }

  & .imageDropzone .hover-effect .change-icon {
    font-size: 3rem;
  }

  & .imageDropzone .hover-effect .change-paragraph {
    font-size: 1.5rem;
  }

  & .addButton {
    justify-content: center;
    width: 20vw;
    min-width: 200px;
    max-width: 400px;
  }

  @media (max-width: 1400px) {
    & .dropzoneWrapper {
      max-width: 400px;
      max-height: calc(400px * 0.5625);
    }

    & .imageDropzone,
    & .dropzoneWrapper {
      width: 35vw;
      min-width: 300px;
      height: calc(35vw * 0.5625);
      min-height: calc(300px * 0.5625);
    }
  }

  @media (max-width: 450px) {
    & .imageDropzone,
    & .dropzoneWrapper,
    & .addButton {
      width: 90vw;
    }

    & .imageDropzone,
    & .dropzoneWrapper {
      min-width: 0;
      height: calc(90vw * 0.5625);
      min-height: 0;
    }
  }
`;
