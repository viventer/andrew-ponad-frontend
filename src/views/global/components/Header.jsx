import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

import { StyledHeader } from "../styles/Header.styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader className="flex">
      <div className="flex">
        <h1>
          <Link to="/" className="reactRouterLink">
            Andrzej Pławecki
          </Link>
        </h1>
        <SearchBar />
      </div>
      <Navigation />
    </StyledHeader>
  );
}
