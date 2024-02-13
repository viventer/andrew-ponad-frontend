import { StyledSearchBar } from "../styles/SearchBar.styled";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StyledSearchBar>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Czego szukasz?"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </form>
    </StyledSearchBar>
  );
}
