import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Forbidden from "../../global/components/Forbidden";

const RequireAuth = ({ allowedRoles }) => {
  const { roles } = useAuth();

  const isAllowed =
    Array.isArray(roles) && roles.some((role) => allowedRoles.includes(role));

  if (isAllowed) {
    return <Outlet />;
  } else if (!isAllowed && Array.isArray(roles)) {
    return <Forbidden />;
  } else {
    return null;
  }
};
export default RequireAuth;
