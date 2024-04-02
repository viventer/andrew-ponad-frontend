import { StyledSelectorOption } from "../styles/Selector.styled";

export default function SelectorOption({
  value,
  areOptionsVisible,
  setAreOptionsVisible,
  setValue,
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
        <p>{value}</p>
      </button>
    </StyledSelectorOption>
  );
}
