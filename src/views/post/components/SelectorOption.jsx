import { useDispatch } from "react-redux";
import { StyledSelectorOption } from "../styles/Selector.styled";
import { setPostCategory } from "../slices/postSlice";

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
      >
        <p>{value}</p>
      </button>
    </StyledSelectorOption>
  );
}
