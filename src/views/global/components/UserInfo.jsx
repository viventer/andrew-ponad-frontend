import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

import { selectUserId } from "../../auth/slices/authSlice";
import { useGetUserByIdQuery } from "../slices/usersApiSlice";

import { StyledUserInfo } from "../styles/UserInfo.styled";

import LogoutButton from "./LogoutButton";
import DeleteAccountButton from "./DeleteAccountButton";
import ChangePasswordButton from "./ChangePasswordButton";
// import VerificationButton from "./VerificationButton";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import ChangePasswordWindow from "./ChangePasswordWindow";
import { HashLoader } from "react-spinners";
import { selectUserData, setUserData } from "../slices/globalStatesSlice";

export default function UserInfo({ setIsUserInfoVisible }) {
  const currentLocation = useLocation();
  const dispatch = useDispatch();
  const { setIsLogged, mainRole } = useAuth();
  const userId = useSelector(selectUserId);
  const userData = useSelector(selectUserData);

  const { data: userRawData, isLoading } = useGetUserByIdQuery(userId, {
    skip: !!userData.username,
  });

  const [isChangePwdWindowVisible, setIsChangePwdWindowVisible] =
    useState(false);
  const [finishedPwdChange, setFinishedPwdChange] = useState(false);

  useEffect(() => {
    const currentUrl = currentLocation.pathname;
    const isOnLoginPage = /login/i.test(currentUrl);
    const isOnRegistrationPage = /register/i.test(currentUrl);

    if (isOnLoginPage || isOnRegistrationPage) {
      setIsUserInfoVisible(false);
    }
  }, [currentLocation]);

  useEffect(() => {
    if (userRawData) {
      dispatch(setUserData(userRawData.entities[userId]));
      setIsLogged(true);
    }
    userRawData || userData.username ? setIsLogged(true) : setIsLogged(false);
  }, [userRawData, userData]);

  const userRole =
    mainRole === "Admin"
      ? "Admin"
      : mainRole === "Editor"
      ? "Edytor"
      : mainRole === "Creator"
      ? "Twórca"
      : mainRole === "Verified"
      ? "Zweryfikowany"
      : "Niezweryfikowany";

  return (
    <StyledUserInfo>
      {userData.username ? (
        <article>
          <header className="flex">
            <h2>Informacje o koncie</h2>
          </header>
          <div className="flex userInfo">
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
              {/* {userRole == "Niezweryfikowany" && <VerificationButton />} To be done on the backend*/}
            </section>
            <section className="flex-column">
              <LogoutButton setIsUserInfoVisible={setIsUserInfoVisible} />
              <ChangePasswordButton
                setIsChangePwdWindowVisible={setIsChangePwdWindowVisible}
                setFinishedPwdChange={setFinishedPwdChange}
              />
              <DeleteAccountButton className="deleteAccountButton" />
            </section>
          </div>
          {isChangePwdWindowVisible && (
            <ChangePasswordWindow
              username={userData.username}
              roles={userData.roles}
              userId={userId}
              finished={finishedPwdChange}
              setFinished={setFinishedPwdChange}
            />
          )}
        </article>
      ) : (
        <article>
          {isLoading ? (
            <div className="loader">
              <HashLoader color="white" />
            </div>
          ) : (
            <>
              <header className="flex">
                <h2>Nie jesteś zalogowany</h2>
              </header>
              <section className="buttonsSection">
                <LoginButton />
                <RegisterButton />
              </section>
            </>
          )}
        </article>
      )}
    </StyledUserInfo>
  );
}
