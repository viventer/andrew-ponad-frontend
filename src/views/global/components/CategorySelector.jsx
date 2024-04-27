import { useState } from "react";
import { StyledSelector } from "../styles/Selector.styled";
import { useSelector } from "react-redux";
import { selectAvailablePostCategories } from "../slices/globalStatesSlice";
import SelectedSelectorOption from "./SelectedSelectorOption";
import SelectorOption from "./SelectorOption";
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
    <StyledSelector>
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
