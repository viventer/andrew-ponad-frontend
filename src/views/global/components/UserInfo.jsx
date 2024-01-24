import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledUserInfo } from "../styles/UserInfo.styled";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
import ChangePasswordWindow from "./ChangePasswordWindow";

export default function UserInfo() {
  const currentLocation = useLocation();

  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);
  const [isChangePwdWindowVisible, setIsChangePwdWindowVisible] =
    useState(false);

  const { setIsLogged, isLogged } = useAuth();
  const userId = useSelector(selectUserId);

  const { data: userRawData, error, isLoading } = useGetUserByIdQuery(userId);

  let userData;
  let userRole;

  useEffect(() => {
    const currentUrl = currentLocation.pathname;
    if (/login/i.test(currentUrl) || /register/i.test(currentUrl)) {
      setIsUserInfoVisible(false);
    }
  }, [currentLocation]);

  if (userRawData) userData = userRawData.entities[userId];

  if (userData) {
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

  useEffect(() => {
    userRawData ? setIsLogged(true) : setIsLogged(false);
  }, [userRawData]);

  return (
    <StyledUserInfo>
      <button onClick={() => setIsUserInfoVisible((prev) => !prev)}>
        <FontAwesomeIcon icon={faUser} className="icon" />
      </button>
      {userData ? (
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
              {userRole == "Niezweryfikowany" && <VerificationButton />}
            </section>
            <section className="flex-column">
              <LogoutButton />
              <ChangePasswordButton
                setIsChangePwdWindowVisible={setIsChangePwdWindowVisible}
              />
              <DeleteAccountButton className="deleteAccountButton" />
            </section>
          </div>
          {isChangePwdWindowVisible && (
            <ChangePasswordWindow username={userData.username} />
          )}
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
