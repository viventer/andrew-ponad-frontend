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
  selectIsErrorReportVisible,
  selectIsLoading,
  selectSuccessMsg,
  selectZoomImgSrc,
} from "../slices/globalStatesSlice";

import { HashLoader } from "react-spinners";
import CreateErrorReport from "../../error-reports/components/CreateErrorReport";

export default function Layout() {
  const errMsg = useSelector(selectErrMsg);
  const dialogMsg = useSelector(selectDialogMsg);
  const dialogOptions = useSelector(selectDialogOptions);
  const isLoading = useSelector(selectIsLoading);
  const successMsg = useSelector(selectSuccessMsg);
  const isErrorReportVisible = useSelector(selectIsErrorReportVisible);

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
      {isErrorReportVisible && (
        <div className="blur almostMaxZIndex">
          <CreateErrorReport />
        </div>
      )}
      <Outlet />
    </div>
  );
}
