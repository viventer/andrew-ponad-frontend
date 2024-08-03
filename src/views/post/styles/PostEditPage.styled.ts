import styled from "styled-components";

export const StyledPostEditPage = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;

  & > .thumbnailBarOverlay {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    max-width: 80vw;
  }

  & > footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: end;
    column-gap: 2rem;
    row-gap: 0.5rem;
    height: 2.5rem;
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.15s ease-in-out;
  }

  & > footer > button {
    height: 2.5rem;
  }

  & .deleteImgButton {
    right: 2.5%;
    top: 5%;
    z-index: 9999999;
  }

  & .deleteImgResponsivePostElement {
    position: absolute;
    top: 0;
  }

  @media (max-width: 1100px) {
    & > .thumbnailBarOverlay {
      width: 80vw;
      max-width: 40rem;
      display: flex;
      gap: 2rem;
    }

    & > .thumbnailBarOverlay > ul {
      position: absolute;
      right: 0;
      bottom: 1rem;
      max-width: 15rem;
    }
  }

  @media (max-width: 500px) {
    margin-top: 3rem;

    & > .thumbnailBarOverlay {
      width: calc(80vw + 0.3rem);
      margin-top: 0.3rem;
    }

    & .deleteImgButton {
      font-size: 1.25rem;
    }
  }
`;

export const StyledPostTitleInput = styled.input`
  transform: translate(0, -100%);
  max-width: 100%;
  z-index: 1000;
  padding: 0.3rem 1.5rem;
  border: solid 0.1rem rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);
  transition: border 0.15s ease-in-out;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: rgba(241, 196, 123, 1);
  }

  @media (max-width: 1100px) {
    transform: translate(0, 0);
    width: 100%;
    padding: 0.3rem 1.5rem;
  }
`;
