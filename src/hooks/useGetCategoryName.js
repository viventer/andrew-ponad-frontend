import { useEffect, useState } from "react";
import { useGetCategoryByIdQuery } from "../views/global/slices/categoriesApiSlice";

const useGetCategoryName = (categoryId) => {
  const [categoryName, setCategoryName] = useState(null);

  const skipQuery = !categoryId;
  const {
    data: categoryRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoryByIdQuery(categoryId, { skip: skipQuery });

  useEffect(() => {
    if (isSuccess) {
      const categoryData = categoryRawData.entities[categoryId];
      setCategoryName(categoryData.name);
    }
  }, [isSuccess]);

  return { categoryName, isLoading, isSuccess, isError, error };
};

export default useGetCategoryName;
