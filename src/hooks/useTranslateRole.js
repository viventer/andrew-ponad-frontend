const useTranslateRole = () => {
  const translateRole = (role, targetLanguage) => {
    if (!role || !targetLanguage) {
      return null;
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
        default:
          return null;
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
        default:
          return null;
      }
    }
  };

  return translateRole;
};

export default useTranslateRole;
