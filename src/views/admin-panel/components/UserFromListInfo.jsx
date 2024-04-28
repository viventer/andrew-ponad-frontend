import { StyledElementFromListInfo } from "../../global/styles/ElementFromListInfo.styled";

export default function UserFromListInfo({ userInfo }) {
  return (
    <StyledElementFromListInfo>
      <p>
        <span>email: </span>
        {userInfo.email}
      </p>
      <p>
        <span>imię: </span>
        {userInfo.firstName}
      </p>
      <p>
        <span>nazwisko: </span>
        {userInfo.lastName}
      </p>
      <p>
        <span>rola: </span>
        {userInfo.mainRole}
      </p>
    </StyledElementFromListInfo>
  );
}
