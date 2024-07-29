const useGetMainRole = () => {
  const getMainRole = (userData) => {
    if (userData.roles.includes("Admin")) {
      return "Admin";
    } else if (userData.roles.includes("Editor")) {
      return "Edytor";
    } else if (userData.roles.includes("Creator")) {
      return "Twórca";
    } else if (userData.roles.includes("Verified")) {
      return "Zweryfikowany";
    } else {
      return "Niezweryfikowany";
    }
  };

  return getMainRole;
};

export default useGetMainRole;
