import { UserType } from "../views/global/types/user.types";

const useGetMainRole = () => {
  const getMainRole = (userData: UserType): string => {
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

  return getMainRole;
};

export default useGetMainRole;
