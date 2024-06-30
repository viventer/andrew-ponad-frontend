import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetAllCategoriesQuery } from "../../global/slices/categoriesApiSlice";
import { selectCategoriesTabSearchQuery } from "../slices/adminPanelSlice";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";

import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";
import CategoryFromList from "./CategoryFromList";

export default function CategoriesList() {
  const {
    data: categoriesRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllCategoriesQuery();

  const searchQuery = useSelector(selectCategoriesTabSearchQuery);

  let categoriesData;
  let filteredCategoriesData;
  if (isSuccess) {
    categoriesData = Object.entries(categoriesRawData.entities);
    filteredCategoriesData = categoriesData.filter(([id, category]) => {
      const categoryName = category.name.toLowerCase();

      const isSearchQueryMatch = categoryName.includes(
        searchQuery.toLowerCase()
      );

      if (searchQuery && !isSearchQueryMatch) {
        return false;
      } else {
        return true;
      }
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

  const [reloadComponent, setReloadComponent] = useState(false);

  return (
    <StyledAdminPanelList>
      <CategoryFromList
        toBeAdded={true}
        setReloadComponent={setReloadComponent}
      />
      {filteredCategoriesData &&
        filteredCategoriesData.map(([id, categoryData]) => {
          return (
            <CategoryFromList
              categoryData={categoryData}
              key={id}
              setReloadComponent={setReloadComponent}
            />
          );
        })}
    </StyledAdminPanelList>
  );
}
