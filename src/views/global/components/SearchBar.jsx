import { StyledSearchBar } from "../styles/Header.styled";
import { useState } from "react";

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
      </form>
    </StyledSearchBar>
  );
}
