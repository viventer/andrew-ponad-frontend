import Header from "./Header";

import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import FixedErrorModal from "./FixedErrorModal";
import { selectErrMsg } from "../slices/globalStatesSlice";

export default function Layout() {
  const errMsg = useSelector(selectErrMsg);

  return (
    <div className="App">
      <Header />
      <FixedErrorModal message={errMsg} />
      <Outlet />
    </div>
  );
}
