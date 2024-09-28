import { useState } from "react";

import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import SelectorOption from "../../global/components/SelectorOption";
import { StyledSelector } from "../../global/styles/Selector.styled";

type Props = {
  setFilter: (filter: string) => void;
  selectedFilter: string;
  options: string[];
};

export default function FilterSelector({
  setFilter,
  selectedFilter,
  options,
}: Props) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  return (
    <StyledSelector data-test="filterSelector">
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="down"
        selectedValue={selectedFilter}
      />
      <div className="selectorOptions">
        {options.map((option) => {
          if (option !== selectedFilter) {
            return (
              <SelectorOption
                key={option}
                value={option}
                areOptionsVisible={areOptionsVisible}
                setAreOptionsVisible={setAreOptionsVisible}
                setValue={setFilter}
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
