import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useGetVisibilityOptions from "../../../hooks/useGetVisibilityOptions";

import { selectPostVisibility, setPostVisibility } from "../slices/postSlice";

import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import SelectorOption from "../../global/components/SelectorOption";
import { StyledSelector } from "../../global/styles/Selector.styled";

export default function VisibilitySelector() {
  const visibilityOptions = useGetVisibilityOptions();

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
