import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBucket,
  faBug,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import { StyledFooter } from "../styles/Footer.styled";
import {
  setIsSearchBoxVisible,
  setIsUserInfoVisible,
  toggleIsErrorReportVisible,
} from "../../global/slices/globalStatesSlice";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <div className="flex">
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
        <button className="gradeCalculatorButton">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <Link to="/gradecalculator" className="link">
            <p>Kalkulator ocen</p>
          </Link>
        </button>
      </div>
      <article>
        <FontAwesomeIcon icon={faBucket} />
        <p>
          Codebucket <span>Studio 2024</span>
        </p>
      </article>
    </StyledFooter>
  );
}
