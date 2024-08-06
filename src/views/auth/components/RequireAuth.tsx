import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ErrorPage from "../../global/components/ErrorPage";

const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { roles } = useAuth();

  const isAllowed =
    Array.isArray(roles) && roles.some((role) => allowedRoles.includes(role));

  if (isAllowed) {
    return <Outlet />;
  } else if (!isAllowed) {
    return (
      <ErrorPage
        headingMessage="Nie masz uprawnień do tej podstrony."
        subheadingMessage="Odśwież stronę lub zaloguj się ponownie na konto z odpowiednimi uprawnieniami"
      />
    );
  }
};
export default RequireAuth;
