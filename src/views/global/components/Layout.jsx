import Header from "./Header";
import FixedErrorModal from "./FixedErrorModal";
import DialogWindow from "./DialogWindow";
import FixedSuccessModal from "./FixedSuccessModal";

import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  selectDialogMsg,
  selectDialogOptions,
  selectErrMsg,
  selectIsLoading,
  selectSuccessMsg,
} from "../slices/globalStatesSlice";

import { HashLoader } from "react-spinners";

export default function Layout() {
  const errMsg = useSelector(selectErrMsg);
  const dialogMsg = useSelector(selectDialogMsg);
  const dialogOptions = useSelector(selectDialogOptions);
  const isLoading = useSelector(selectIsLoading);
  const successMsg = useSelector(selectSuccessMsg);

  return (
    <div className="App">
      <Header />
      <FixedErrorModal message={errMsg} />
      <DialogWindow message={dialogMsg} options={dialogOptions} />
      <FixedSuccessModal message={successMsg} />
      {isLoading && (
        <div className="blur maxZIndex">
          <HashLoader color="white" />
        </div>
      )}
      <Outlet />
    </div>
  );
}
