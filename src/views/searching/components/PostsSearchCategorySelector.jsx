import { useEffect, useState } from "react";
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

import {
  selectAvailablePostCategories,
  setErrMsg,
} from "../../global/slices/globalStatesSlice";

import SelectorOption from "../../global/components/SelectorOption";
import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import { StyledSelector } from "../../global/styles/Selector.styled";
import useGetAllCategoryNames from "../../../hooks/useGetAllCategoryNames";

export default function CategorySelector({
  categoryFilter,
  setCategoryFilter,
}) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const { categoryNames, isSuccess, isError, error } = useGetAllCategoryNames();
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    if (isSuccess && categoryNames) {
      setCategoryOptions([...categoryNames, "Dowolna"]);
    } else if (isError) {
      setErrMsg(error?.message || "Błąd pobierania kategorii.");
    }
  }, [isSuccess, categoryNames, isError]);

  return (
    <StyledSelector className="selectorUl">
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="down"
        selectedValue={categoryFilter}
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
              />
            );
          }
        })}
      </div>
    </StyledSelector>
  );
}
