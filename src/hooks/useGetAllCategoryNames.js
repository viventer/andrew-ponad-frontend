import { useState } from "react";
import { useGetAllCategoriesQuery } from "../views/global/slices/categoriesApiSlice";

const useGetAllCategoryNames = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const getAllCategoryNames = async () => {
    const {
      data: categoriesRawData,
      isLoading: isQueryLoading,
      isSuccess: isQuerySuccess,
      isError: isQueryError,
      error: queryError,
    } = useGetAllCategoriesQuery();
  };
};
