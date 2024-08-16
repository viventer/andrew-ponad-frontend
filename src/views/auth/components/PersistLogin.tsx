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

import usePersist from "../../../hooks/usePersist";

const PersistLogin = () => {
  const dispatch = useDispatch();

  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const isLogged = useSelector(selectIsLogged);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError }] =
    useRefreshMutation();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
        setTrueSuccess(true);
      } catch (err) {
        console.error(err);
      }
    };

    if (!token && persist) verifyRefreshToken();
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
