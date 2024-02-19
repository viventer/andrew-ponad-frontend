import { useState } from "react";
import { StyledSelector } from "../styles/Selector.styled";
import SelectedSelectorOption from "./SelectedSelectorOption";
import SelectorOption from "./SelectorOption";
import { useSelector } from "react-redux";
import { selectPostCategory } from "../slices/postSlice";

export default function CategorySelector() {
  const categoryList = [
    "Windows Server",
    "Urządzenia sieciowe",
    "Ubuntu Server",
    "openSUSE Server",
    "inne",
  ];

  const selectedCategory = useSelector(selectPostCategory);

  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  return (
    <StyledSelector>
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
      />
      <div className="selectorOptions">
        {categoryList.map((category) => {
          if (category !== selectedCategory) {
            return (
              <SelectorOption
                key={category}
                areOptionsVisible={areOptionsVisible}
                value={category}
                setAreOptionsVisible={setAreOptionsVisible}
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
