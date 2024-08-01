const useGetVisibilityOptions = (): string[] => {
  return [
    "Publiczny",
    "Niepubliczny",
    "Prywatny",
    "Szkic",
    "Dla zweryfikowanych",
  ];
};

export default useGetVisibilityOptions;
