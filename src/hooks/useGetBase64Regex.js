const useGetBase64Regex = () => {
  return /^data:image\/[^;]+;base64,/;
};

export default useGetBase64Regex;
