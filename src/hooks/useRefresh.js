import { useRefreshMutation } from "../views/auth/slices/authApiSlice";
import useAuth from "./useAuth";

const useRefresh = () => {
  const [refreshMutation] = useRefreshMutation();
  const { isLogged } = useAuth();

  const refresh = async () => {
    if (isLogged) {
      await refreshMutation();
    }
  };

  return refresh;
};

export default useRefresh;
