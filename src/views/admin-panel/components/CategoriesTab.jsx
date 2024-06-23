import React from "react";
import { StyledAdminPanelTab } from "../styles/AdminPanelTab.styled";
import SearchBar from "../../global/components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoriesTabSearchQuery,
  setCategoriesTabSearchQuery,
} from "../slices/adminPanelSlice";
import AddCategoryButton from "./AddCategoryButton";
import CategoriesList from "./CategoriesList";

export default function CategoriesTab() {
  const searchQuery = useSelector(selectCategoriesTabSearchQuery);
  const dispatch = useDispatch();

  return (
    <StyledAdminPanelTab>
      <div className="flex">
        <SearchBar
          view="adminPanel"
          searchQuery={searchQuery}
          setSearchQuery={(query) =>
            dispatch(setCategoriesTabSearchQuery(query))
          }
          placeholder="Czego szukasz?"
        />
        <AddCategoryButton />
      </div>
      <CategoriesList />
    </StyledAdminPanelTab>
  );
}
