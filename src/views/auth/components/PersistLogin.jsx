import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useRefreshMutation } from "../slices/authApiSlice";
import { selectCurrentToken } from "../slices/authSlice";

import useAuth from "../../../hooks/useAuth";
import usePersist from "../../../hooks/usePersist";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";

const PersistLogin = () => {
  const dispatch = useDispatch();

  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const { setIsLogged, isLogged } = useAuth();

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        try {
          await refresh();
          setTrueSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }

    return () => (effectRan.current = true);

    // eslint-disable-next-line
  }, []);

  let content;
  if (!persist) {
    content = <Outlet />;
  } else if (isLoading) {
    dispatch(setIsLoading(true));
    return;
  } else if (isError) {
    if (isLogged) {
      dispatch(setErrMsg(`${error?.data?.message} - zaloguj się ponownie`));
      setIsLogged(false);
    }
    dispatch(setIsLoading(false));
  } else if ((isSuccess && trueSuccess) || (token && isUninitialized)) {
    if (!isLogged) {
      setIsLogged(true);
    }
    dispatch(setIsLoading(false));
    content = <Outlet />;
  }

  return content;
};
export default PersistLogin;
