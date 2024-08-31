import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetAllCategoriesQuery } from "../../global/slices/categoriesApiSlice";
import {
  CategoryType,
  CategoryEntity,
} from "../../global/types/category.types";
import { selectCategoriesTabSearchQuery } from "../slices/adminPanelSlice";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";

import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";
import CategoryFromList from "./CategoryFromList";
import useGetFilteredData from "../../../hooks/useGetFilteredData";

export default function CategoriesList() {
  const {
    data: categoriesRawData,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetAllCategoriesQuery();

  const searchQuery = useSelector(selectCategoriesTabSearchQuery);
  const getFilteredData = useGetFilteredData();

  let categoriesData: CategoryEntity[];
  let filteredCategoriesData;
  if (isSuccess) {
    categoriesData = Object.entries(categoriesRawData.entities);
    filteredCategoriesData = getFilteredData(categoriesData, {
      searchQuery,
    });
  }

  const dispatch = useDispatch();
  if (isError) {
    dispatch(setErrMsg(error?.data?.message || "Błąd pobierania kategorii"));
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <StyledAdminPanelList>
      <CategoryFromList toBeAdded={true} refetch={refetch} />
      {filteredCategoriesData &&
        filteredCategoriesData.map(([id, categoryData]) => {
          return (
            <CategoryFromList
              categoryData={categoryData as CategoryType}
              key={id}
              refetch={refetch}
            />
          );
        })}
    </StyledAdminPanelList>
  );
}
