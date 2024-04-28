import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import UserInfo from "../../user-info/components/UserInfo";
import { StyledHeader } from "../styles/Header.styled";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PostsSearch from "../../searching/components/PostsSearch";

export default function Header() {
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

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
      <button onClick={() => setIsUserInfoVisible((prev) => !prev)}>
        <FontAwesomeIcon icon={faUser} className="icon" />
      </button>
      {isUserInfoVisible && (
        <UserInfo setIsUserInfoVisible={setIsUserInfoVisible} />
      )}
    </StyledHeader>
  );
}
