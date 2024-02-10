import Header from "./Header";

import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import FixedErrorModal from "./FixedErrorModal";
import ConfirmationDialog from "./ConfirmationDialog";
import { selectDialogMsg, selectErrMsg } from "../slices/globalStatesSlice";

export default function Layout() {
  const errMsg = useSelector(selectErrMsg);
  const dialogMsg = useSelector(selectDialogMsg);

  return (
    <div className="App">
      <Header />
      <FixedErrorModal message={errMsg} />
      <ConfirmationDialog message={dialogMsg} />
      <Outlet />
    </div>
  );
}
