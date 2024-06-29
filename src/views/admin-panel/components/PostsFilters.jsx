import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import useGetVisibilityOptions from "../../../hooks/useGetVisibilityOptions";

import {
  selectAvailablePostCategories,
  setErrMsg,
  setIsLoading,
} from "../../global/slices/globalStatesSlice";
import {
  selectCategoryFilter,
  selectPostsTabSearchQuery,
  selectVisibilityFilter,
  setCategoryFilter,
  setPostsTabSearchQuery,
  setVisibilityFilter,
} from "../slices/adminPanelSlice";

import FilterSelector from "./FilterSelector";
import SearchBar from "../../global/components/SearchBar";
import { StyledAdminPanelFilters } from "../styles/AdminPanelFilters.styled";
import useGetAllCategoryNames from "../../../hooks/useGetAllCategoryNames";
import { useEffect, useState } from "react";

export default function PostsFilters() {
  const selectedVisibilityFilter = useSelector(selectVisibilityFilter);
  const selectedCategoryFilter = useSelector(selectCategoryFilter);
  const searchQuery = useSelector(selectPostsTabSearchQuery);

  const dispatch = useDispatch();

  const visibilityOptions = useGetVisibilityOptions();
  const allVisibilityOptions = [...visibilityOptions, "Dowolna"];

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
    <StyledAdminPanelFilters>
      <FontAwesomeIcon icon={faFilter} className="icon postsFiltersIcon" />
      {categoryOptions && (
        <>
          <FilterSelector
            selectedFilter={selectedVisibilityFilter}
            setFilter={(filter) => dispatch(setVisibilityFilter(filter))}
            options={allVisibilityOptions}
          />
          <FilterSelector
            selectedFilter={selectedCategoryFilter}
            setFilter={(filter) => dispatch(setCategoryFilter(filter))}
            options={categoryOptions}
          />
          <SearchBar
            view="adminPanel"
            searchQuery={searchQuery}
            setSearchQuery={(query) => dispatch(setPostsTabSearchQuery(query))}
            placeholder="Czego szukasz?"
          />
        </>
      )}
    </StyledAdminPanelFilters>
  );
}
