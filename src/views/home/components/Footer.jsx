import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBucket, faBug } from "@fortawesome/free-solid-svg-icons";

import { StyledFooter } from "../styles/Footer.styled";
import ErrorReport from "../../error-reports/components/CreateErrorReport";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsErrorReportVisible,
  setIsSearchBoxVisible,
  setIsUserInfoVisible,
  toggleIsErrorReportVisible,
} from "../../global/slices/globalStatesSlice";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <button
        onClick={() => {
          dispatch(toggleIsErrorReportVisible());
          dispatch(setIsUserInfoVisible(false));
          dispatch(setIsSearchBoxVisible(false));
        }}
      >
        <FontAwesomeIcon icon={faBug} />
        <p>Zgłoś błąd</p>
      </button>
      <article>
        <FontAwesomeIcon icon={faBucket} />
        <p>
          Codebucket <span>Studio 2024</span>
        </p>
      </article>
    </StyledFooter>
  );
}
