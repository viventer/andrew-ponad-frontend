const useTranslateErrorReportsStatus = () => {
  const translateStatus = (
    reportStatus: string,
    targetLanguage: string
  ): string => {
    if (!reportStatus || !targetLanguage) {
      return "";
    }

    if (targetLanguage === "english") {
      switch (reportStatus) {
        case "Nowe":
          return "new";
        case "W trakcie":
          return "inProgress";
        case "Naprawione":
          return "fixed";
      }
    } else if (targetLanguage === "polish") {
      switch (reportStatus) {
        case "new":
          return "Nowe";
        case "inProgress":
          return "W trakcie";
        case "fixed":
          return "Naprawione";
      }
    }

    return "";
  };

  return translateStatus;
};

export default useTranslateErrorReportsStatus;
