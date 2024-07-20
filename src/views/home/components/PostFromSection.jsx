import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledPostFromSection } from "../styles/PostFromSection.styled";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function PostFromSection({ postData, index, areExpanded }) {
  return (
    <StyledPostFromSection
      className={`post${index} ${areExpanded ? "isExpanded" : ""}`}
    >
      <div className="thumbnailWrapper">
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
