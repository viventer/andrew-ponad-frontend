import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledUserInfo } from "../styles/UserInfo.styled";
import { StyledButton } from "../styles/Button.styled";
import { faPencil, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LogoutButton from "./LogoutButton";
import DeleteAccountButton from "./DeleteAccountButton";
import ChangePasswordButton from "./ChangePasswordButton";
import VerificationButton from "./VerificationButton";
import { selectUserId } from "../../auth/slices/authSlice";
import { useGetUserByIdQuery } from "../slices/usersApiSlice";
import { useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth";

export default function UserInfo() {
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

  const { setIsLogged, isLogged } = useAuth();
  const userId = useSelector(selectUserId);

  const { data: userRawData, error, isLoading } = useGetUserByIdQuery(userId);

  const userData = userRawData.entities[userId];
  console.log(userData);

  const userRole = userData.roles.includes("Admin")
    ? "Admin"
    : userData.roles.includes("Editor")
    ? "Edytor"
    : userData.roles.includes("Creator")
    ? "Twórca"
    : userData.roles.includes("Verified")
    ? "Zweryfikowany"
    : "Niezweryfikowany";

  return (
    <StyledUserInfo>
      <button onClick={() => setIsUserInfoVisible((prev) => !prev)}>
        <FontAwesomeIcon icon={faUser} className="icon" />
      </button>
      <article className={isUserInfoVisible ? "visible" : ""}>
        <header className="flex">
          <h2>Informacje o koncie</h2>
        </header>
        <div className="flex">
          <section>
            <p>
              login: <span>{userData.username}</span>
            </p>
            <p>
              email: <span>{userData.email}</span>
            </p>
            <p>
              imię: <span>{userData.firstName}</span>
            </p>
            <p>
              nazwisko: <span>{userData.lastName}</span>
            </p>
            <p>
              rola: <span>{userRole}</span>
            </p>
            <VerificationButton />
          </section>
          <section className="flex">
            <LogoutButton />
            <StyledButton>
              <FontAwesomeIcon icon={faPencil} />
              Edytuj dane
            </StyledButton>
            <ChangePasswordButton />
            <DeleteAccountButton />
          </section>
        </div>
      </article>
    </StyledUserInfo>
  );
}
