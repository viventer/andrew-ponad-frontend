import { useState } from "react";
import { useSelector } from "react-redux";

import {
  faCircleQuestion,
  faCompass,
  faEthernet,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSuse,
  faUbuntu,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

import { selectAvailablePostCategories } from "../../global/slices/globalStatesSlice";

import SelectorOption from "../../global/components/SelectorOption";
import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import { StyledSelector } from "../../global/styles/Selector.styled";

export default function CategorySelector({
  categoryFilter,
  setCategoryFilter,
}) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const availableCategories = useSelector(selectAvailablePostCategories);
  const categoryOptions = [...availableCategories, "dowolna"];
  const icons = {
    "Wybierz kategorię": faCompass,
    "Windows Server": faWindows,
    "Urządzenia sieciowe": faEthernet,
    "Ubuntu Server": faUbuntu,
    "openSUSE Server": faSuse,
    inne: faCircleQuestion,
    dowolna: faGlobe,
  };

  return (
    <StyledSelector className="selectorUl">
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="down"
        selectedValue={categoryFilter}
        icon={icons[categoryFilter]}
      />
      <div className="selectorOptions">
        {categoryOptions.map((category) => {
          if (category !== categoryFilter) {
            return (
              <SelectorOption
                key={category}
                value={category}
                areOptionsVisible={areOptionsVisible}
                setAreOptionsVisible={setAreOptionsVisible}
                setValue={setCategoryFilter}
                icon={icons[category]}
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
