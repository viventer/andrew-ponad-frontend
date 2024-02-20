import { useDispatch, useSelector } from "react-redux";
import { selectPostCategory } from "../slices/postSlice";
import { StyledSelectorOption } from "../styles/Selector.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function SelectedSelectorOption({
  setAreOptionsVisible,
  areOptionsVisible,
  direction,
  selectedValue,
}) {
  const toggleOptionsVisibility = (e) => {
    e.preventDefault();
    setAreOptionsVisible((prev) => !prev);
  };

  return (
    <StyledSelectorOption>
      <button
        onClick={(e) => {
          toggleOptionsVisibility(e);
        }}
        className={`selected ${direction}`}
      >
        <p>{selectedValue}</p>
        {direction === "down" ? (
          <FontAwesomeIcon
            icon={areOptionsVisible ? faChevronUp : faChevronDown}
            className="icon"
          />
        ) : (
          <FontAwesomeIcon
            icon={areOptionsVisible ? faChevronDown : faChevronUp}
            className="icon"
          />
        )}
      </button>
    </StyledSelectorOption>
  );
}
