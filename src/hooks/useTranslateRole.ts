export type RoleInEnglish =
  | "Admin"
  | "Editor"
  | "Creator"
  | "Verified"
  | "User";

export type RoleInPolish =
  | "Admin"
  | "Edytor"
  | "Twórca"
  | "Zweryfikowany"
  | "Niezweryfikowany";

const useTranslateRole = () => {
  type ReturnType = RoleInPolish | RoleInEnglish | null;

  const translateRole = (role: string, targetLanguage: string): ReturnType => {
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

    return null;
  };

  return translateRole;
};

export default useTranslateRole;
