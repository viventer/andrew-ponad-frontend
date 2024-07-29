import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetUsersQuery } from "../../global/slices/usersApiSlice";
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
  } = useGetUsersQuery();

  const roleFilter = useSelector(selectRoleFilter);
  const searchQuery = useSelector(selectUsersTabSearchQuery);

  const getMainRole = useGetMainRole();
  const getFilteredData = useGetFilteredData();

  let usersData;
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
    dispatch(setErrMsg(error?.data?.errorMessage + ". Odśwież stronę."));
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

  const [reloadComponent, setReloadComponent] = useState(false);

  return (
    <StyledAdminPanelList>
      {filteredUsersData &&
        filteredUsersData.map(([id, userData]) => {
          const mainRole = getMainRole(userData);
          return (
            <UserFromList
              setReloadComponent={setReloadComponent}
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
