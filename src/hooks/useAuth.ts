import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import { selectCurrentToken } from "../views/auth/slices/authSlice";
import {
  selectIsLogged,
  setIsLogged,
} from "../views/global/slices/globalStatesSlice";

const useAuth = () => {
  let isEditor = false;
  let isAdmin = false;
  let isCreator = false;
  let isVerified = false;
  let mainRole = "User";

  const token = useSelector(selectCurrentToken) as string;
  const isLogged = useSelector(selectIsLogged) as boolean;

  const dispatch = useDispatch();

  if (token) {
    if (!isLogged) {
      dispatch(setIsLogged(true));
    }

    type jwtDecodeType = {
      UserInfo: {
        username: string;
        roles: string[];
      };
      exp: number;
      iat: number;
    };

    const decoded = jwtDecode<jwtDecodeType>(token);
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
