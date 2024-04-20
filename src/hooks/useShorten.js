const useShorten = () => {
  const shorten = (string, maxCharNumber, maxWidth, currentWidth) => {
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
