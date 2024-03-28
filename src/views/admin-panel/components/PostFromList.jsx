import { StyledPostFromList } from "../styles/PostFromList.styled";
import thumbnailPlaceholder from "../../post/image/thumbnailPlaceholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PostFromList({ thumbnail, title, id }) {
  const base64Regex = /^data:image\/[^;]+;base64,/;
  const isThumbnailCorrect = base64Regex.test(thumbnail);

  const navigate = useNavigate();

  const editPost = () => {
    navigate(`/post/${id}/edit`);
  };

  return (
    <StyledPostFromList>
      <img src={isThumbnailCorrect ? thumbnail : thumbnailPlaceholder} />
      <h2>{title}</h2>
      <button onClick={editPost}>
        <FontAwesomeIcon icon={faPencil} />
      </button>
    </StyledPostFromList>
  );
}
