import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { StyledPostFromSection } from "../styles/PostFromSection.styled";
import { PostType } from "../../post/types/post.types";

type Props = {
  postData: PostType;
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
      onClick={() => navigate(`/post/${postData.id}`)}
    >
      <div className="thumbnailWrapper">
        <img src={postData.thumbnail} alt="post thumbnail" />
        <div className="postViews">
          <FontAwesomeIcon icon={faEye} className="icon" />
          {postData.views}
        </div>
      </div>
      <p data-test={`postFromSectionTitle${index}`}>{postData.title}</p>
    </StyledPostFromSection>
  );
}
