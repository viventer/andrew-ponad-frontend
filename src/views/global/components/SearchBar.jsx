import { StyledSearchBar } from "../styles/SearchBar.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  view,
  placeholder,
}) {
  return (
    <StyledSearchBar
      className={
        view == "adminPanel"
          ? "adminPanelSearchBar"
          : view == "searchBox"
          ? "searchBoxSearchBar"
          : ""
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder={placeholder}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </StyledSearchBar>
  );
}
