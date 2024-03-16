import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectPostCategory, setPostCategory } from "../slices/postSlice";

import { StyledSelector } from "../styles/Selector.styled";
import SelectedSelectorOption from "./SelectedSelectorOption";
import SelectorOption from "./SelectorOption";

export default function CategorySelector() {
  const categoryList = [
    "Windows Server",
    "Urządzenia sieciowe",
    "Ubuntu Server",
    "openSUSE Server",
    "inne",
  ];

  const dispatch = useDispatch();

  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const selectedCategory = useSelector(selectPostCategory);
  const setSelectorValue = (value) => dispatch(setPostCategory(value));

  return (
    <StyledSelector>
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="down"
        selectedValue={selectedCategory}
      />
      <div className="selectorOptions">
        {categoryList.map((category) => {
          if (category !== selectedCategory) {
            return (
              <SelectorOption
                key={category}
                value={category}
                areOptionsVisible={areOptionsVisible}
                setAreOptionsVisible={setAreOptionsVisible}
                setValue={setSelectorValue}
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
