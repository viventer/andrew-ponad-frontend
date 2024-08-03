import styled from "styled-components";

export const StyledAdminPanelList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  overflow: auto;
  list-style: none;

  &.errorReportsList {
    gap: 2rem;
  }
`;
