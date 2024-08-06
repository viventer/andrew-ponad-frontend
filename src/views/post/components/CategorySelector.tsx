import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectPostCategoryName,
  setPostCategoryName,
} from "../slices/postSlice";

import { StyledSelector } from "../../global/styles/Selector.styled";
import SelectedSelectorOption from "../../global/components/SelectedSelectorOption";
import SelectorOption from "../../global/components/SelectorOption";
import useGetAllCategoryNames from "../../../hooks/useGetAllCategoryNames";
import { setErrMsg } from "../../global/slices/globalStatesSlice";

export default function CategorySelector() {
  const { categoryNames, isSuccess, isError, error } = useGetAllCategoryNames();
  const [categoryList, setCategoryList] = useState<string[]>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && categoryNames) {
      setCategoryList([...categoryNames]);
    } else if (isError) {
      dispatch(setErrMsg(error?.message || "Błąd pobierania kategorii."));
    }
  }, [isSuccess, categoryNames, isError]);

  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const selectedCategory = useSelector(selectPostCategoryName);
  const setSelectorValue = (value: string) =>
    dispatch(setPostCategoryName(value));

  return (
    <StyledSelector>
      <SelectedSelectorOption
        setAreOptionsVisible={setAreOptionsVisible}
        areOptionsVisible={areOptionsVisible}
        direction="down"
        selectedValue={selectedCategory}
      />
      <div className="selectorOptions">
        {categoryList &&
          categoryList.map((category) => {
            if (category !== selectedCategory) {
              return (
                <SelectorOption
                  key={category}
                  value={category}
                  areOptionsVisible={areOptionsVisible}
                  setAreOptionsVisible={setAreOptionsVisible}
                  setValue={setSelectorValue}
                />
              );
            }
          })}
      </div>
    </StyledSelector>
  );
}
