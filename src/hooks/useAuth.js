import { useSelector } from "react-redux";
import { selectCurrentToken } from "../views/auth/slices/authSlice";
import jwtDecode from "jwt-decode";
import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isEditor = false;
  let isAdmin = false;
  let status = "User";
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);

  if (token) {
    if (!isLogged) {
      setIsLogged(true);
    }

    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    isEditor = roles?.editor ? true : false;
    isAdmin = roles?.admin ? true : false;

    if (isAdmin) status = "Admin";
    if (isEditor) status = "Editor";

    return {
      username,
      roles,
      status,
      isEditor,
      isAdmin,
      isLogged,
      setIsLogged,
    };
  }

  return {
    username: "",
    roles: {},
    isEditor,
    isAdmin,
    status,
    isLogged,
    setIsLogged,
  };
};
export default useAuth;
