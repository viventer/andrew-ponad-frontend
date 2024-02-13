import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import { selectCurrentToken } from "../views/auth/slices/authSlice";
import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isEditor = false;
  let isAdmin = false;
  let isCreator = false;
  let isVerified = false;
  let mainRole = "User";
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);

  if (token) {
    if (!isLogged) {
      setIsLogged(true);
    }

    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    if (roles.includes("Admin")) isAdmin = true;
    if (roles.includes("Editor")) isEditor = true;
    if (roles.includes("Creator")) isCreator = true;
    if (roles.includes("Verified")) isVerified = true;

    if (isAdmin) mainRole = "Admin";
    if (isEditor) mainRole = "Editor";
    if (isCreator) mainRole = "Creator";
    if (isVerified) mainRole = "Verified";

    return {
      username,
      roles,
      mainRole,
      isLogged,
      setIsLogged,
      isEditor,
      isAdmin,
      isCreator,
      isVerified,
    };
  }

  return {
    username: "",
    roles: {},
    mainRole,
    isLogged,
    setIsLogged,
    isEditor,
    isAdmin,
    isCreator,
    isVerified,
  };
};
export default useAuth;
