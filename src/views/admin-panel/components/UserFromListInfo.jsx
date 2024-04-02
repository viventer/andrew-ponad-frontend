import { StyledUserFromListInfo } from "../styles/UserFromListInfo.styled";

export default function UserFromListInfo({ userInfo }) {
  return (
    <StyledUserFromListInfo>
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
    </StyledUserFromListInfo>
  );
}
