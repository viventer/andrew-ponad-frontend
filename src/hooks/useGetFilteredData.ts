import useGetMainRole from "./useGetMainRole";
import useTranslateErrorReportsStatus from "./useTranslateErrorReportsStatus";
import useTranslateVisibility from "./useTranslateVisibility";
import { User } from "../views/global/slices/usersApiSlice";

const useGetFilteredData = () => {
  const translateVisibility = useTranslateVisibility();
  const translateStatus = useTranslateErrorReportsStatus();
  const getMainRole = useGetMainRole();

  type Element = [
    string,
    {
      [index: string]: string | number;
    }
  ];

  type Filters = {
    [index: string]: string;
  };

  const getFilteredData = (elements: Element[], filters: Filters) => {
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
        } else if (element[key] && typeof element[key] == "string") {
          elementValue = element[key].toLowerCase();
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

        if (key == "searchQuery" && typeof element.title == "string") {
          return element.title.toLowerCase().includes(filterValue);
        } else if (key == "searchQuery" && typeof element.name == "string") {
          return element.name.toLowerCase().includes(filterValue);
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
