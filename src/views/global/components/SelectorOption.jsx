import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledSelectorOption } from "../styles/Selector.styled";

export default function SelectorOption({
  value,
  areOptionsVisible,
  setAreOptionsVisible,
  setValue,
  icon,
}) {
  const selectOption = (e) => {
    e.preventDefault();
    setValue(value);
    setAreOptionsVisible(false);
  };

  return (
    <StyledSelectorOption className={areOptionsVisible ? "" : "hide"}>
      <button
        onClick={(e) => {
          selectOption(e);
        }}
        className="selectorButton"
      >
        {icon && <FontAwesomeIcon icon={icon} className="selectorIcon" />}
        <p>{value}</p>
      </button>
    </StyledSelectorOption>
  );
}
