import { StyledSearchBar } from "../styles/SearchBar.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  view?: string;
  placeholder: string;
};

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  view,
  placeholder,
}: Props) {
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
          maxLength={64}
        />
        <button className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </StyledSearchBar>
  );
}
