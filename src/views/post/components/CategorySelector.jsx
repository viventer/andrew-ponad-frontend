import { StyledSelector } from "../styles/Selector.styled";

export default function CategorySelector() {
  const categoryList = [
    "Windows Server",
    "Urządzenia sieciowe",
    "Ubuntu Server",
    "openSUSE Server",
    "inne",
  ];

  return (
    <StyledSelector>
      <option value="" disabled selected>
        Wybierz kategorię
      </option>
      {categoryList.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </StyledSelector>
  );
}
