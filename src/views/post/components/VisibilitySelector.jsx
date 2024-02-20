import { useDispatch, useSelector } from "react-redux";
import { StyledSelector } from "../styles/Selector.styled";
import { selectPostVisibility, setPostVisibility } from "../slices/postSlice";
import SelectedSelectorOption from "./SelectedSelectorOption";
import SelectorOption from "./SelectorOption";
import { useState } from "react";

export default function VisibilitySelector() {
  const visibilityOptions = [
    "Publiczny",
    "Niepubliczny",
    "Prywatny",
    "Szkic",
    "Dla zweryfikowanych",
  ];

  const dispatch = useDispatch();
  const selectedVisibility = useSelector(selectPostVisibility);

  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const setSelectorValue = (value) => dispatch(setPostVisibility(value));

  return (
    <StyledSelector>
      {visibilityOptions.map((option) => {
        if (option !== selectedVisibility) {
          return (
            <SelectorOption
              key={option}
              value={option}
              areOptionsVisible={areOptionsVisible}
              setAreOptionsVisible={setAreOptionsVisible}
              setValue={setSelectorValue}
            />
          );
        }
      })}
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="up"
        selectedValue={selectedVisibility}
      />
    </StyledSelector>
  );
}
