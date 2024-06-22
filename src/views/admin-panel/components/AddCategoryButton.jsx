import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledAddButton } from "../styles/AddButton.styled";

export default function AddCategoryButton() {
  const createCategory = () => {};

  return (
    <StyledAddButton onClick={createCategory}>
      <p>Utwórz kategorię</p>
      <FontAwesomeIcon icon={faAdd} className="icon" />
    </StyledAddButton>
  );
}
