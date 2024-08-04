import { useDispatch, useSelector } from "react-redux";

import {
  selectCategoriesTabSearchQuery,
  setCategoriesTabSearchQuery,
} from "../slices/adminPanelSlice";

import SearchBar from "../../global/components/SearchBar";
import CategoriesList from "./CategoriesList";
import { StyledAdminPanelTab } from "../styles/AdminPanelTab.styled";

export default function CategoriesTab() {
  const searchQuery = useSelector(selectCategoriesTabSearchQuery);
  const dispatch = useDispatch();

  return (
    <StyledAdminPanelTab className="categoriesTab">
      <div className="flex">
        <SearchBar
          view="adminPanel"
          searchQuery={searchQuery}
          setSearchQuery={(query: string) =>
            dispatch(setCategoriesTabSearchQuery(query))
          }
          placeholder="Czego szukasz?"
        />
      </div>
      <CategoriesList />
    </StyledAdminPanelTab>
  );
}
