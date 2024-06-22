import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import { StyledAddButton } from "../styles/AddButton.styled";

export default function AddPostButton() {
  const navigate = useNavigate();

  const addPost = () => {
    navigate("/post/create");
  };

  return (
    <StyledAddButton onClick={addPost}>
      <p>Dodaj posta</p>
      <FontAwesomeIcon icon={faAdd} className="icon" />
    </StyledAddButton>
  );
}
