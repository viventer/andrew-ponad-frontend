import styled from "styled-components";

export const StyledUserInfo = styled.div`
  & > button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    /* border-left: 0.2rem solid white; */
    box-shadow: -0.1rem 0 0 white;
    margin-left: 3rem;
    padding-left: 1rem;
    transition: all 0.15s ease-in-out;
  }

  & > button:hover {
    cursor: pointer;
    /* border-left: 0.2rem dashed ${({ theme }) => theme.colors.sunset}; */
    box-shadow: -0.5rem 0 0 ${({ theme }) => theme.colors.sunset};
  }

  & > article {
    position: absolute;
    right: 0;
    top: calc(100% + 0.1rem);
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    /* box-shadow: -1rem 1rem 0rem rgba(255, 255, 255, 0.15); */
    /* box-shadow: -1rem 1rem 0rem 0.9rem ${({ theme }) =>
      theme.colors.navy}; */
    border-left: 0.5rem dashed ${({ theme }) => theme.colors.navy};
    border-bottom: 0.5rem dashed ${({ theme }) => theme.colors.navy};
    border-right: none;
  }
`;
