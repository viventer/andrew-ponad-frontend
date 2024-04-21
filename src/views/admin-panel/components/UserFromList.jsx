import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faSave,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import useTranslateRole from "../../../hooks/useTranslateRole";

import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../global/slices/usersApiSlice";
import {
  selectDialogAction,
  selectDialogAnswer,
  setDialogAction,
  setDialogAnswer,
  setDialogMsg,
  setDialogOptions,
  setErrMsg,
  setIsLoading,
} from "../../global/slices/globalStatesSlice";

import RoleSelector from "./RoleSelector";
import UserFromListInfo from "./UserFromListInfo";
import { StyledUserFromList } from "../styles/UserFromList.styled";

export default function UserFromList({ userInfo, setReloadComponent }) {
  const [showInfo, setShowInfo] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  const [
    updateUser,
    { isLoading: isUpdateLoading, isSuccess: isUpdateSuccess },
  ] = useUpdateUserMutation();
  const [
    deleteUserMutation,
    { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },
  ] = useDeleteUserMutation();

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

  const deleteUser = async () => {
    try {
      await deleteUserMutation(userInfo.id).unwrap();
    } catch (err) {
      if (!err?.status && !err?.originalStatus) {
        dispatch(setErrMsg("Brak odpowiedzi serwera"));
      } else {
        setErrMsg(err?.data?.message);
      }
    }
  };

  const showDialog = () => {
    dispatch(setDialogOptions(["Tak", "Nie"]));
    dispatch(setDialogAction(`deleteUser${userInfo.id}`));
    dispatch(
      setDialogMsg(
        `Czy na pewno chcesz usunąć użytkownika ${userInfo.username}? Ta operacja jest nieodwracalna.`
      )
    );
  };

  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);
  useEffect(() => {
    if (dialogAnswer == "Tak" && dialogAction == `deleteUser${userInfo.id}`) {
      deleteUser();
    }
    dispatch(setDialogAction(null));
    dispatch(setDialogAnswer(null));
  }, [dialogAnswer]);

  useEffect(() => {
    if (isUpdateLoading || isDeleteLoading) {
      dispatch(setIsLoading(true));
    } else if (isUpdateSuccess) {
      dispatch(setIsLoading(false));
      setShowSuccessIcon(true);
      setTimeout(() => {
        setShowSuccessIcon(false);
        setReloadComponent((prev) => !prev);
      }, 1500);
    } else if (isDeleteSuccess) {
      dispatch(setIsLoading(false));
      setTimeout(() => {
        setReloadComponent((prev) => !prev);
      }, 1000);
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isUpdateSuccess, isUpdateLoading, isDeleteSuccess, isDeleteLoading]);

  return (
    <StyledUserFromList>
      <div className="shortInfo">
        <div onClick={() => setShowInfo((prev) => !prev)}>
          <FontAwesomeIcon icon={faUser} className="icon" />

          <p>{userInfo.username}</p>
        </div>
        <div className="rightSectionWrapper">
          <div>
            <RoleSelector
              selectedMainRole={selectedMainRole}
              setSelectedMainRole={setSelectedMainRole}
            />
            <button onClick={changeMainRole}>
              {!showSuccessIcon && (
                <FontAwesomeIcon icon={faSave} className="saveIcon icon" />
              )}
              {showSuccessIcon && (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="successIcon icon"
                />
              )}
            </button>
          </div>
          <button onClick={showDialog} className="deleteButton">
            <FontAwesomeIcon icon={faTrash} className="deleteIcon icon" />
          </button>
        </div>
      </div>
      {showInfo && <UserFromListInfo userInfo={userInfo} />}
    </StyledUserFromList>
  );
}
