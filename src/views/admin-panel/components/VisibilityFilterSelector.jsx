import { useState } from "react";
import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import SelectorOption from "../../global/components/SelectorOption";
import { StyledSelector } from "../../global/styles/Selector.styled";
import useGetVisibilityOptions from "../../../hooks/useGetVisibilityOptions";
import { useSelector } from "react-redux";
import { selectAvailablePostCategories } from "../../global/slices/globalStatesSlice";

export default function VisibilityFilterSelector({
  setSelectedVisibilityFilter,
  selectedVisibilityFilter,
}) {
  const visibilityOptions = useGetVisibilityOptions();
  const availableCategories = useSelector(selectAvailablePostCategories);

  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  return (
    <StyledSelector>
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="down"
        selectedValue={selectedVisibilityFilter}
      />
      <div className="selectorOptions">
        {visibilityOptions.map((option) => {
          if (option !== selectedVisibilityFilter) {
            return (
              <SelectorOption
                key={option}
                value={option}
                areOptionsVisible={areOptionsVisible}
                setAreOptionsVisible={setAreOptionsVisible}
                setValue={setSelectedVisibilityFilter}
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
