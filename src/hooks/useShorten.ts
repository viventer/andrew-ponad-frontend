const useShorten = () => {
  const shorten = (
    string: string,
    maxCharNumber: number,
    maxWidth: number,
    currentWidth: number
  ): string => {
    if (
      string.length <= maxCharNumber ||
      (maxWidth && currentWidth > maxWidth)
    ) {
      return string;
    }
    return string.slice(0, maxCharNumber) + "...";
  };

  return shorten;
};

export default useShorten;
