import styled from "styled-components";

export const StyledAdminPanelList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 65vh;
  margin-top: 2rem;
  margin-bottom: 1rem;
  overflow: auto;
  list-style: none;

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
