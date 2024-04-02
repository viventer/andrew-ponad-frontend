import { useDispatch } from "react-redux";
import { useGetUsersQuery } from "../../global/slices/usersApiSlice";
import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import { useEffect } from "react";
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

  let usersData;
  let filteredUsersData;
  let mainRole;
  const translateRole = useTranslateRole();
  if (isSuccess) {
    usersData = Object.entries(usersRawData.entities);

    const translatedRoleFilter = translateRole(roleFilter, "english");
    filteredUsersData = usersData.filter((user) => {
      const userData = user[1];
      if (userData.roles.includes("Admin")) {
        mainRole = "Admin";
      } else if (userData.roles.includes("Editor")) {
        mainRole = "Edytor";
      } else if (userData.roles.includes("Creator")) {
        mainRole = "Twórca";
      } else if (userData.roles.includes("Verified")) {
        mainRole = "Zweryfikowany";
      } else {
        mainRole = "Niezweryfikowany";
      }

      if (
        roleFilter != "Dowolna" &&
        roleFilter != "Wybierz rolę" &&
        mainRole != translatedRoleFilter
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

  return (
    <StyledAdminPanelList>
      {filteredUsersData &&
        filteredUsersData.map(([id, userData]) => {
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
            />
          );
        })}
    </StyledAdminPanelList>
  );
}
