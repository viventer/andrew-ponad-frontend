import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useRefreshMutation } from "../slices/authApiSlice";
import { selectCurrentToken } from "../slices/authSlice";
import {
  selectIsLogged,
  setIsLoading,
  setIsLogged,
} from "../../global/slices/globalStatesSlice";

import useAuth from "../../../hooks/useAuth";
import usePersist from "../../../hooks/usePersist";

const PersistLogin = () => {
  const dispatch = useDispatch();

  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const isLogged = useSelector(selectIsLogged);

  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError }] =
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

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading, dispatch]);

  if (!persist) {
    return <Outlet />;
  } else if (isLoading) {
    return;
  } else if (isError) {
    if (isLogged) {
      dispatch(setIsLogged(false));
    }
  } else if ((isSuccess && trueSuccess) || (token && isUninitialized)) {
    if (!isLogged) {
      dispatch(setIsLogged(true));
    }
  }

  return <Outlet />;
};
export default PersistLogin;
