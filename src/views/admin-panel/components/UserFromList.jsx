import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledUserFromList } from "../styles/UserFromList.styled";
import {
  faCheckCircle,
  faSave,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import RoleSelector from "./RoleSelector";
import UserFromListInfo from "./UserFromListInfo";
import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "../../global/slices/usersApiSlice";
import { useDispatch } from "react-redux";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import useTranslateRole from "../../../hooks/useTranslateRole";

export default function UserFromList({ userInfo }) {
  const [showInfo, setShowInfo] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  const [
    updateUser,
    { isLoading: isUpdateLoading, isSuccess: isUpdateSuccess },
  ] = useUpdateUserMutation();

  const [selectedMainRole, setSelectedMainRole] = useState(userInfo.mainRole);
  const dispatch = useDispatch();
  const translateRole = useTranslateRole();

  const changeMainRole = async () => {
    const rolesWeights = {
      Admin: 5,
      Editor: 4,
      Creator: 3,
      Verified: 2,
      User: 1,
    };

    const translatedSelectedMainRole = translateRole(
      selectedMainRole,
      "english"
    );

    const translatedMainRole = translateRole(userInfo.mainRole, "english");

    console.log(userInfo.mainRole);
    console.log(selectedMainRole);

    if (userInfo.mainRole == selectedMainRole) {
      dispatch(setErrMsg("Użytkownik posiada już wybraną rolę"));
      return;
    }

    let updatedRoles;
    const oldMainRoleWeight = rolesWeights[translatedMainRole];
    const newMainRoleWeight = rolesWeights[translatedSelectedMainRole];
    if (newMainRoleWeight > oldMainRoleWeight) {
      updatedRoles = [...userInfo.roles, translatedSelectedMainRole];
    } else if (newMainRoleWeight < oldMainRoleWeight) {
      updatedRoles =
        translatedSelectedMainRole == "User"
          ? ["User"]
          : ["User", translatedSelectedMainRole];
    }

    try {
      console.log(updatedRoles);
      await updateUser({
        userId: userInfo.id,
        initialUserData: { username: userInfo.username, roles: updatedRoles },
      }).unwrap();
    } catch (err) {
      if (!err?.originalStatus && !err?.status) {
        setErrMsg("Brak odpowiedzi serwera");
      } else {
        setErrMsg(err?.data?.message);
      }
    }
  };

  useEffect(() => {
    if (isUpdateLoading) {
      dispatch(setIsLoading(true));
    } else if (isUpdateSuccess) {
      dispatch(setIsLoading(false));
      setShowSuccessIcon(true);
      setTimeout(() => {
        setShowSuccessIcon(false);
        window.location.reload();
      }, 1000);
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isUpdateSuccess, isUpdateLoading]);

  return (
    <StyledUserFromList>
      <div className="shortInfo">
        <div onClick={() => setShowInfo((prev) => !prev)}>
          <FontAwesomeIcon icon={faUser} className="icon" />

          <p>{userInfo.username}</p>
        </div>
        <div>
          <RoleSelector
            selectedMainRole={selectedMainRole}
            setSelectedMainRole={setSelectedMainRole}
          />
          <button onClick={changeMainRole}>
            <FontAwesomeIcon icon={faSave} className="icon" />
            {showSuccessIcon && (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="successIcon icon"
              />
            )}
          </button>
        </div>
        <button>
          <FontAwesomeIcon icon={faTrash} className="icon" />
        </button>
      </div>
      {showInfo && <UserFromListInfo userInfo={userInfo} />}
    </StyledUserFromList>
  );
}
