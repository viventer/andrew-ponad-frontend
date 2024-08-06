import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { StyledPostFromSection } from "../styles/PostFromSection.styled";
import { Post } from "../../post/slices/postsApiSlice";

type Props = {
  postData: Post;
  index: number;
  areExpanded: boolean;
};

export default function PostFromSection({
  postData,
  index,
  areExpanded,
}: Props) {
  const navigate = useNavigate();

  return (
    <StyledPostFromSection
      className={`post${index} ${areExpanded ? "isExpanded" : ""}`}
    >
      <div
        className="thumbnailWrapper"
        onClick={() => navigate(`/post/${postData.id}`)}
      >
        <img src={postData.thumbnail} alt="post thumbnail" />
        <div className="postViews">
          <FontAwesomeIcon icon={faEye} className="icon" />
          {postData.views}
        </div>
      </div>
      <p>{postData.title}</p>
    </StyledPostFromSection>
  );
}
