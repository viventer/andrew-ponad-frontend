import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledUserInfo } from "../styles/UserInfo.styled";
import { StyledButton } from "../styles/Button.styled";
import { faPencil, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import DeleteAccountButton from "./DeleteAccountButton";
import ChangePasswordButton from "./ChangePasswordButton";
import VerificationButton from "./VerificationButton";
import { selectUserId } from "../../auth/slices/authSlice";
import { useGetUserByIdQuery } from "../slices/usersApiSlice";
import { useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useLocation } from "react-router-dom";

export default function UserInfo() {
  const currentUrl = useLocation().pathname;

  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

  const { setIsLogged, isLogged } = useAuth();
  const userId = useSelector(selectUserId);

  const { data: userRawData, error, isLoading } = useGetUserByIdQuery(userId);

  let userData;
  let userRole;

  useEffect(() => {
    if (/login/i.test(currentUrl) || /register/i.test(currentUrl)) {
      setIsUserInfoVisible(false);
    }
    console.log(currentUrl);
  }, [currentUrl]);

  if (userRawData) {
    userData = userRawData.entities[userId];

    userRole = userData.roles.includes("Admin")
      ? "Admin"
      : userData.roles.includes("Editor")
      ? "Edytor"
      : userData.roles.includes("Creator")
      ? "Twórca"
      : userData.roles.includes("Verified")
      ? "Zweryfikowany"
      : "Niezweryfikowany";
  }

  return (
    <StyledUserInfo>
      <button onClick={() => setIsUserInfoVisible((prev) => !prev)}>
        <FontAwesomeIcon icon={faUser} className="icon" />
      </button>
      {userRawData ? (
        <article className={isUserInfoVisible ? "visible" : ""}>
          <header className="flex">
            <h2>Informacje o koncie</h2>
          </header>
          <div className="flex-column">
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
            <section className="flex-column">
              <LogoutButton />
              <StyledButton>
                <FontAwesomeIcon icon={faPencil} />
                Edytuj dane
              </StyledButton>
              <ChangePasswordButton />
              <DeleteAccountButton className="deleteAccountButton" />
            </section>
          </div>
        </article>
      ) : (
        <article className={isUserInfoVisible ? "visible" : ""}>
          <header className="flex">
            <h2>Nie jesteś zalogowany</h2>
          </header>
          <section className="buttonsSection">
            <LoginButton />
            <RegisterButton />
          </section>
        </article>
      )}
    </StyledUserInfo>
  );
}
