const useTranslateRole = () => {
  const translateRole = (role: string, targetLanguage: string): string => {
    if (!role || !targetLanguage) {
      return "";
    }

    if (targetLanguage === "english") {
      switch (role) {
        case "Admin":
          return "Admin";
        case "Edytor":
          return "Editor";
        case "Twórca":
          return "Creator";
        case "Zweryfikowany":
          return "Verified";
        case "Niezweryfikowany":
          return "User";
      }
    } else if (targetLanguage === "polish") {
      switch (role) {
        case "Admin":
          return "Admin";
        case "Editor":
          return "Edytor";
        case "Creator":
          return "Twórca";
        case "Verified":
          return "Zweryfikowany";
        case "User":
          return "Niezweryfikowany";
      }
    }

    return "";
  };

  return translateRole;
};

export default useTranslateRole;
