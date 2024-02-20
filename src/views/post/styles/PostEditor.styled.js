import styled from "styled-components";

export const StyledPostEditor = styled.main`
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
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.15s ease-in-out;
    display: flex;
    align-items: end;
    height: 2.5rem;
    gap: 2rem;
  }

  & > footer > button {
    padding: 0 1rem;
    border: 0.1rem solid rgba(21, 49, 92, 1);
    box-shadow: inset 0 0 5rem rgba(21, 49, 92, 0.3);
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.15s ease-in-out;
    height: 2.5rem;
  }

  & > footer > button:active {
    filter: brightness(1.75);
  }

  @media (hover: hover) {
    & > footer > button:hover {
      box-shadow: inset 2rem 0rem 5rem rgba(21, 49, 92, 0.5);
      cursor: pointer;
    }
  }

  @media (max-width: 1100px) {
    & > .thumbnailBarOverlay {
      width: 80vw;
      max-width: 40rem;
    }
  }

  @media (max-width: 750px) {
    & > .thumbnailBarOverlay {
      display: flex;
    }

    & > .thumbnailBarOverlay > ul {
      position: absolute;
      right: 0;
      bottom: 1rem;
      max-width: 12rem;
    }
  }

  @media (max-width: 500px) {
    margin-top: 3rem;

    & > .thumbnailBarOverlay {
      width: calc(80vw + 0.3rem);
      margin-top: 0.3rem;
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

  @media (max-width: 750px) {
    transform: translate(0, 0);
    width: 100%;
    padding: 0.3rem 1.5rem;
  }
`;
