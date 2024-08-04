import useGetMainRole from "./useGetMainRole";
import useTranslateErrorReportsStatus from "./useTranslateErrorReportsStatus";
import useTranslateVisibility from "./useTranslateVisibility";
import { User, UserEntity } from "../views/global/slices/usersApiSlice";
import { Post, PostEntity } from "../views/post/slices/postsApiSlice";
import {
  ErrorReport,
  ErrorReportEntity,
} from "../views/error-reports/slices/errorReportApiSlice";
import {
  Category,
  CategoryEntity,
} from "../views/global/slices/categoriesApiSlice";

const useGetFilteredData = () => {
  const translateVisibility = useTranslateVisibility();
  const translateStatus = useTranslateErrorReportsStatus();
  const getMainRole = useGetMainRole();

  type Filters = {
    [index: string]: string;
  };

  type DataEntity =
    | PostEntity
    | ErrorReportEntity
    | CategoryEntity
    | UserEntity;

  const getFilteredData = (
    elements: DataEntity[],
    filters: Filters
  ): DataEntity[] => {
    const filteredData = elements.filter(([id, element]) => {
      return Object.keys(filters).every((key) => {
        let elementValue = "";
        let filterValue = "";
        if (key == "visibility") {
          filterValue = translateVisibility(
            filters[key],
            "english"
          ).toLowerCase();
        } else if (key == "status") {
          filterValue = translateStatus(filters[key], "english").toLowerCase();
        } else {
          filterValue = filters[key].toLowerCase();
        }

        if (key == "mainRole") {
          elementValue = getMainRole(element as unknown as User).toLowerCase();
        } else if (
          element[key as keyof typeof element] &&
          typeof element[key as keyof typeof element] == "string"
        ) {
          elementValue = element[key as keyof typeof element].toLowerCase();
        }

        if (
          !filterValue ||
          ["kategoria", "dowolna", "dowolny", "widoczność"].includes(
            filterValue
          ) ||
          filterValue.includes("wybierz")
        ) {
          return true;
        }

        if (
          key == "searchQuery" &&
          typeof (element as Post | Category | ErrorReport).title == "string"
        ) {
          return (element as Post | Category | ErrorReport).title
            .toLowerCase()
            .includes(filterValue);
        } else if (
          key == "searchQuery" &&
          typeof (element as User).username == "string"
        ) {
          return element.username.toLowerCase().includes(filterValue);
        } else if (
          key == "searchQuery" &&
          typeof element.username == "string"
        ) {
          return element.username.toLowerCase().includes(filterValue);
        }

        return elementValue == filterValue;
      });
    });

    return filteredData;
  };

  return getFilteredData;
};

export default useGetFilteredData;
