const useGetTextOnlyLength = (string) => {
  const decodedString = string
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  const textOnly = decodedString.replace(/<[^>]*>/g, "");

  return textOnly.length;
};

export default useGetTextOnlyLength;
