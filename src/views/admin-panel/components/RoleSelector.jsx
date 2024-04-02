import { useState } from "react";
import { StyledSelector } from "../../global/styles/Selector.styled";
import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import SelectorOption from "../../global/components/SelectorOption";

export default function RoleSelector({
  selectedMainRole,
  setSelectedMainRole,
}) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const availableRoles = [
    "Admin",
    "Edytor",
    "Twórca",
    "Zweryfikowany",
    "Niezweryfikowany",
  ];

  return (
    <StyledSelector>
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="down"
        selectedValue={selectedMainRole}
      />
      <div className="selectorOptions">
        {availableRoles.map((role) => {
          if (role !== selectedMainRole) {
            return (
              <SelectorOption
                key={role}
                value={role}
                areOptionsVisible={areOptionsVisible}
                setAreOptionsVisible={setAreOptionsVisible}
                setValue={setSelectedMainRole}
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
