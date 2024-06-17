const useIsThumbnailUrlCorrect = () => {
  const isThumbnailUrlCorrect = (url) => {
    const base64Regex = /^data:image\/[^;]+;base64,/;
    const isCorrect = base64Regex.test(url);

    return isCorrect;
  };

  return isThumbnailUrlCorrect;
};

export default useIsThumbnailUrlCorrect;
