import { useDispatch } from "react-redux";
import { useGetUsersQuery } from "../../global/slices/usersApiSlice";
import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import { useEffect, useState } from "react";
import UserFromList from "./UserFromList";
import useTranslateRole from "../../../hooks/useTranslateRole";

export default function UsersList({ roleFilter, searchQuery }) {
  const {
    data: usersRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  const getMainRole = (userData) => {
    if (userData.roles.includes("Admin")) {
      return "Admin";
    } else if (userData.roles.includes("Editor")) {
      return "Edytor";
    } else if (userData.roles.includes("Creator")) {
      return "Twórca";
    } else if (userData.roles.includes("Verified")) {
      return "Zweryfikowany";
    } else {
      return "Niezweryfikowany";
    }
  };

  let usersData;
  let filteredUsersData;
  if (isSuccess) {
    usersData = Object.entries(usersRawData.entities);
    filteredUsersData = usersData.filter((user) => {
      const userData = user[1];
      const mainRole = getMainRole(userData);

      if (
        roleFilter != "Dowolna" &&
        roleFilter != "Wybierz rolę" &&
        mainRole != roleFilter
      ) {
        return false;
      } else if (searchQuery && !userData.username.includes(searchQuery)) {
        return false;
      } else {
        return true;
      }
    });
  }

  const dispatch = useDispatch();

  if (isError) {
    dispatch(setErrMsg(error));
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
    </StyledAdminPanelList>
  );
}
