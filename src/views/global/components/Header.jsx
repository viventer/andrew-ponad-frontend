import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import { StyledHeader } from "../styles/Header.styled";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
        <SearchBar placeholder="Czego szukasz?" />
      </div>
      <Navigation />
      <button onClick={() => setIsUserInfoVisible((prev) => !prev)}>
        <FontAwesomeIcon icon={faUser} className="icon" />
      </button>
      {isUserInfoVisible && (
        <UserInfo setIsUserInfoVisible={setIsUserInfoVisible} />
      )}
    </StyledHeader>
  );
}
