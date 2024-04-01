import { useState } from "react";
import { StyledSelector } from "../../global/styles/Selector.styled";
import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import SelectorOption from "../../global/components/SelectorOption";

export default function RoleSelector({ mainRole }) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const [selectedRole, setSelectedRole] = useState(mainRole);

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
        selectedValue={selectedRole}
      />
      <div className="selectorOptions">
        {availableRoles.map((role) => {
          if (role !== selectedRole) {
            return (
              <SelectorOption
                key={role}
                value={role}
                areOptionsVisible={areOptionsVisible}
                setAreOptionsVisible={setAreOptionsVisible}
                setValue={setSelectedRole}
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
