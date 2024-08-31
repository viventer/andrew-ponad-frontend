import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetUsersQuery } from "../../global/slices/usersApiSlice";
import { UserType, UserEntity } from "../../global/types/user.types";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import {
  selectRoleFilter,
  selectUsersTabSearchQuery,
} from "../slices/adminPanelSlice";

import UserFromList from "./UserFromList";
import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";
import useGetMainRole from "../../../hooks/useGetMainRole";
import useGetFilteredData from "../../../hooks/useGetFilteredData";

export default function UsersList() {
  const {
    data: usersRawData,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetUsersQuery();

  const roleFilter = useSelector(selectRoleFilter);
  const searchQuery = useSelector(selectUsersTabSearchQuery);

  const getMainRole = useGetMainRole();
  const getFilteredData = useGetFilteredData();

  let usersData: UserEntity[];
  let filteredUsersData;
  if (isSuccess) {
    usersData = Object.entries(usersRawData.entities);
    filteredUsersData = getFilteredData(usersData, {
      searchQuery,
      mainRole: roleFilter,
    });
  }

  const dispatch = useDispatch();

  if (isError) {
    dispatch(setErrMsg("Wystąpił błąd. Odśwież stronę."));
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <StyledAdminPanelList>
      {filteredUsersData &&
        filteredUsersData.map(([id, userData]) => {
          const mainRole = getMainRole(userData as UserType);
          return (
            <UserFromList
              key={id}
              userInfo={{
                username: userData.username,
                id: id,
                mainRole: mainRole,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                roles: userData.roles,
              }}
              refetch={refetch}
            />
          );
        })}
      {filteredUsersData && filteredUsersData.length == 0 && (
        <p>
          Nie znaleziono użytkowników spełniających podane kryteria
          wyszukiwania.
        </p>
      )}
    </StyledAdminPanelList>
  );
}
