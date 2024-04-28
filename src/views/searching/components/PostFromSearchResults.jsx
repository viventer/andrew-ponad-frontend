import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledPostFromSearchResults } from "../styles/PostFromSearchResults.styled";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PostFromListInfo from "../../admin-panel/components/PostFromListInfo";
import useShorten from "../../../hooks/useShorten";
import { useNavigate } from "react-router-dom";

export default function PostFromSearchResults({ postData }) {
  const [showInfo, setShowInfo] = useState(false);

  const base64Regex = /^data:image\/[^;]+;base64,/;
  const isThumbnailCorrect = base64Regex.test(postData.thumbnail);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shortenTitle = useShorten();

  const navigate = useNavigate();
  const viewPost = () => {
    navigate(`/post/${postData.id}`);
  };

  return (
    <StyledPostFromSearchResults>
      <div className="flex">
        <button onClick={() => setShowInfo((prev) => !prev)}>
          <FontAwesomeIcon icon={showInfo ? faChevronUp : faChevronDown} />
        </button>
      </div>
      <img
        src={isThumbnailCorrect ? postData.thumbnail : thumbnailPlaceholder}
        alt="post thumbnail"
        onClick={viewPost}
      />
      <div onClick={viewPost}>
        <h3>{shortenTitle(postData.title, 18, 650, windowWidth)}</h3>
      </div>
      {showInfo && <PostFromListInfo postData={postData} />}
    </StyledPostFromSearchResults>
  );
}
