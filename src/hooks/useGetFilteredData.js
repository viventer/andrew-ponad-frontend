import useGetMainRole from "./useGetMainRole";
import useTranslateErrorReportsStatus from "./useTranslateErrorReportsStatus";
import useTranslateVisibility from "./useTranslateVisibility";

const useGetFilteredData = () => {
  const translateVisibility = useTranslateVisibility();
  const translateStatus = useTranslateErrorReportsStatus();
  const getMainRole = useGetMainRole();

  const getFilteredData = (elements, filters) => {
    const filteredData = elements.filter(([id, element]) => {
      return Object.keys(filters).every((key) => {
        let elementValue;
        let filterValue;
        if (key == "visibility") {
          filterValue = translateVisibility(filters[key], "english");
        } else if (key == "status") {
          filterValue = translateStatus(filters[key], "english");
        } else {
          filterValue = filters[key].toLowerCase();
        }

        if (key == "mainRole") {
          elementValue = getMainRole(element).toLowerCase();
        } else if (element[key]) {
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

        if (key == "searchQuery" && element.title) {
          return element.title.toLowerCase().includes(filterValue);
        } else if (key == "searchQuery" && element.name) {
          return element.name.toLowerCase().includes(filterValue);
        } else if (key == "searchQuery" && element.username) {
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
