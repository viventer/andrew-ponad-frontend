import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faSave,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import useTranslateRole, {
  RoleInEnglish,
} from "../../../hooks/useTranslateRole.ts";

import {
  useDeleteUserMutation,
  User,
  useUpdateUserMutation,
} from "../../global/slices/usersApiSlice.ts";
import {
  selectDialogAction,
  selectDialogAnswer,
  setDialogAction,
  setDialogAnswer,
  setDialogMsg,
  setDialogOptions,
  setErrMsg,
  setIsLoading,
} from "../../global/slices/globalStatesSlice.ts";

import RoleSelector from "./RoleSelector.tsx";
import UserFromListInfo from "./UserFromListInfo.tsx";
import { StyledElementFromList } from "../styles/ElementFromList.styled.ts";

type Props = {
  userInfo: UserInfo;
  setReloadComponent: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserInfo = {
  username: string;
  id: string;
  mainRole: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
};

export default function UserFromList({ userInfo, setReloadComponent }: Props) {
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
    ) as RoleInEnglish;

    const translatedMainRole = translateRole(
      userInfo.mainRole,
      "english"
    ) as RoleInEnglish;

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
        userData: {
          username: userInfo.username,
          roles: updatedRoles as string[],
        },
      }).unwrap();
    } catch (err: any) {
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
    } catch (err: any) {
      if (!err?.status && !err?.originalStatus) {
        dispatch(setErrMsg("Brak odpowiedzi serwera"));
      } else {
        dispatch(setErrMsg(err?.data?.message));
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
    dispatch(setDialogAction(""));
    dispatch(setDialogAnswer(""));
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
    <StyledElementFromList>
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
    </StyledElementFromList>
  );
}
