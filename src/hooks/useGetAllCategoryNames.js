import { useEffect, useState } from "react";
import { useGetAllCategoriesQuery } from "../views/global/slices/categoriesApiSlice";

const useGetAllCategoryNames = () => {
  const [categoryNames, setCategoryNames] = useState(null);

  const {
    data: categoriesRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (isSuccess) {
      const categoriesData = Object.entries(categoriesRawData.entities);
      const categoryNamesList = categoriesData.map(
        ([id, category]) => category.name
      );
      setCategoryNames(categoryNamesList);
    }
  }, [isSuccess]);

  return { categoryNames, isLoading, isSuccess, isError, error };
};

export default useGetAllCategoryNames;
