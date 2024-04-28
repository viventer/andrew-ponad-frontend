import { StyledSearchBar } from "../styles/SearchBar.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  view,
  placeholder,
  setShowSearchBox,
}) {
  return (
    <StyledSearchBar className={view == "adminPanel" && "adminPanelSearchBar"}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder={placeholder}
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
