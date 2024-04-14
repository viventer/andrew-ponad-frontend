import styled from "styled-components";

export const StyledAdminPanelList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 65vh;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    height: 60vh;
  }

  @media (max-width: 850px) {
    height: 55vh;
  }

  @media (max-width: 507px) {
    height: 50vh;
  }
`;
