const useTranslateVisibility = () => {
  const translateVisibility = (postVisibility, targetLanguage) => {
    if (!postVisibility || !targetLanguage) {
      return null; // Obsługa błędów, gdy brakuje argumentów
    }

    if (targetLanguage === "english") {
      switch (postVisibility) {
        case "Publiczny":
          return "public";
        case "Prywatny":
          return "private";
        case "Niepubliczny":
          return "unlisted";
        case "Szkic":
          return "draft";
        case "Dla zweryfikowanych":
          return "verifiedOnly";
        default:
          return null; // Obsługa błędów
      }
    } else if (targetLanguage === "polish") {
      switch (postVisibility) {
        case "public":
          return "Publiczny";
        case "private":
          return "Prywatny";
        case "unlisted":
          return "Niepubliczny";
        case "draft":
          return "Szkic";
        case "verifiedOnly":
          return "Dla zweryfikowanych";
        default:
          return null; // Obsługa błędów
      }
    }
  };

  return translateVisibility;
};

export default useTranslateVisibility;
