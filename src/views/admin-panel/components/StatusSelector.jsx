import { useState } from "react";
import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import SelectorOption from "../../global/components/SelectorOption";
import { StyledSelector } from "../../global/styles/Selector.styled";

export default function StatusSelector({ selectedStatus, setSelectedStatus }) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const availableStatuses = ["Nowe", "W trakcie", "Naprawione"];

  return (
    <StyledSelector>
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="down"
        selectedValue={selectedStatus}
      />
      <div className="selectorOptions">
        {availableStatuses.map((status) => {
          if (status !== selectedStatus) {
            return (
              <SelectorOption
                key={status}
                value={status}
                areOptionsVisible={areOptionsVisible}
                setAreOptionsVisible={setAreOptionsVisible}
                setValue={setSelectedStatus}
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
