const useGetFilteredData = () => {
  const getFilteredData = (elements, filters) => {
    const filteredData = elements.filter(([id, element]) => {
      return Object.keys(filters).every((key) => {
        const filterValue = filters[key].toLowerCase();
        const elementValue = element[key].toLowerCase();
        if (
          !filterValue ||
          ["kategoria", "dowolna", "dowolny", "widoczność"].includes(
            filterValue
          ) ||
          filterValue.includes("wybierz")
        ) {
          return true;
        }
        return elementValue == filterValue;
      });
    });

    return filteredData;
  };

  return { getFilteredData };
};

export default useGetFilteredData;
