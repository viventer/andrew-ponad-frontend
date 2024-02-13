import Header from "./Header";
import FixedErrorModal from "./FixedErrorModal";
import ConfirmationDialog from "./ConfirmationDialog";

import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  selectDialogMsg,
  selectErrMsg,
  selectIsLoading,
} from "../slices/globalStatesSlice";

import { HashLoader } from "react-spinners";

export default function Layout() {
  const override = {};

  const errMsg = useSelector(selectErrMsg);
  const dialogMsg = useSelector(selectDialogMsg);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="App">
      <Header />
      <FixedErrorModal message={errMsg} />
      <ConfirmationDialog message={dialogMsg} />
      {isLoading && (
        <div className="blur">
          <HashLoader color="white" cssOverride={override} />
        </div>
      )}
      <Outlet />
    </div>
  );
}
