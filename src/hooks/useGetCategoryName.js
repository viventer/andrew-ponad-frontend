import { useEffect, useState } from "react";
import { useGetCategoryByIdQuery } from "../views/global/slices/categoriesApiSlice";

const useGetCategoryName = () => {
  const getCategoryName = (categoryId) => {
    const [categoryName, setCategoryName] = useState(null);

    const {
      data: categoryRawData,
      isLoading,
      isSuccess,
      isError,
      error,
    } = useGetCategoryByIdQuery(categoryId);

    useEffect(() => {
      if (isSuccess) {
        const categoryData = categoryRawData.entities[categoryId];
        setCategoryName(categoryData.name);
      }
    }, [isSuccess]);

    return { categoryName, isLoading, isSuccess, isError, error };
  };

  return getCategoryName;
};

export default useGetCategoryName;
