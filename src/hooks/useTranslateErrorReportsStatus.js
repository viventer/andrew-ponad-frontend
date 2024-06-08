const useTranslateErrorReportsStatus = () => {
  const translateStatus = (reportStatus, targetLanguage) => {
    if (!reportStatus || !targetLanguage) {
      return null;
    }

    if (targetLanguage === "english") {
      switch (reportStatus) {
        case "Nowe":
          return "new";
        case "W trakcie":
          return "inProgress";
        case "Naprawione":
          return "fixed";
        default:
          return null;
      }
    } else if (targetLanguage === "polish") {
      switch (reportStatus) {
        case "new":
          return "Nowe";
        case "inProgress":
          return "W trakcie";
        case "fixed":
          return "Naprawione";
        default:
          return null;
      }
    }
  };

  return translateStatus;
};

export default useTranslateErrorReportsStatus;
