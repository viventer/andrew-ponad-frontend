import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import { StyledAddPostButton } from "../styles/AddPostButton.styled";

export default function AddPostButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addPost = () => {
    navigate("/post/create");
  };

  return (
    <StyledAddPostButton onClick={addPost}>
      <p>Dodaj posta</p>
      <FontAwesomeIcon icon={faAdd} className="icon" />
    </StyledAddPostButton>
  );
}
