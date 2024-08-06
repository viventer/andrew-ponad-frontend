import { useEffect, useState } from "react";

import { setErrMsg } from "../../global/slices/globalStatesSlice";

import SelectorOption from "../../global/components/SelectorOption";
import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import { StyledSelector } from "../../global/styles/Selector.styled";
import useGetAllCategoryNames from "../../../hooks/useGetAllCategoryNames";

type Props = {
  categoryFilter: string;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function PostsSearchCategorySelector({
  categoryFilter,
  setCategoryFilter,
}: Props) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const { categoryNames, isSuccess, isError, error } = useGetAllCategoryNames();
  const [categoryOptions, setCategoryOptions] = useState<string[]>();

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
        {categoryOptions &&
          categoryOptions.map((category) => {
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
