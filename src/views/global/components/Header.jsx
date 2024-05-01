import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faUser } from "@fortawesome/free-solid-svg-icons";

import {
  selectIsUserInfoVisible,
  setIsSearchBoxVisible,
  toggleIsUserInfoVisible,
} from "../slices/globalStatesSlice";

import PostsSearch from "../../searching/components/PostsSearch";
import Navigation from "./Navigation";
import UserInfo from "../../user-info/components/UserInfo";
import { StyledHeader } from "../styles/Header.styled";

export default function Header() {
  const isUserInfoVisible = useSelector(selectIsUserInfoVisible);
  const dispatch = useDispatch();

  return (
    <StyledHeader className="flex">
      <div className="flex">
        <h1>
          <Link to="/" className="reactRouterLink">
            <FontAwesomeIcon icon={faServer} className="icon" />
            <p>Andrzej Pławecki</p>
          </Link>
        </h1>
        <PostsSearch />
      </div>
      {/* <Navigation /> can be done after the app is released*/}
      <button
        onClick={() => {
          dispatch(toggleIsUserInfoVisible());
          dispatch(setIsSearchBoxVisible(false));
        }}
      >
        <FontAwesomeIcon icon={faUser} className="icon" />
      </button>
      {isUserInfoVisible && <UserInfo />}
    </StyledHeader>
  );
}
