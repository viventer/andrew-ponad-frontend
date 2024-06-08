import styled from "styled-components";

export const StyledErrorReportContentEditorImages = styled.section`
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 0.3rem;
  }

  & > div {
    position: relative;
    width: fit-content;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  & > div > img {
    position: absolute;
    top: 0;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    z-index: -1;
  }

  & .deleteButton {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.5rem;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.5rem 0.8rem;
    backdrop-filter: blur(2px);
    border-radius: 3rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.red};
    transition: all 0.15s ease-in-out;
  }

  & .deleteButton:hover {
    border-color: white;
    cursor: pointer;
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
    & .imageDropzone {
      width: 35vw;
      min-width: 300px;
      height: calc(35vw * 0.5625);
      min-height: calc(300px * 0.5625);
    }

    & .dropzoneWrapper {
      width: 35vw;
      height: calc(35vw * 0.5625);
      max-height: calc(400px * 0.5625);
      min-height: calc(300px * 0.5625);
      max-width: 400px;
      min-width: 300px;
    }
  }

  @media (max-width: 450px) {
    & .imageDropzone {
      width: 90vw;
      height: calc(90vw * 0.5625);
      min-width: 0;
      min-height: 0;
    }

    & .dropzoneWrapper {
      width: 90vw;
      height: calc(90vw * 0.5625);
      min-width: 0;
      min-height: 0;
    }

    & .addButton {
      width: 90vw;
    }
  }
`;
