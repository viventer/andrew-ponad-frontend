import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import { StyledHeader } from "../styles/Header.styled";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <StyledHeader className="flex">
      <div className="flex">
        <h1>
          <Link to="/" className="reactRouterLink">
            <FontAwesomeIcon icon={faServer} className="icon" />
            <p>Andrzej Pławecki</p>
          </Link>
        </h1>
        <SearchBar />
      </div>
      <Navigation />
      <UserInfo />
    </StyledHeader>
  );
}
