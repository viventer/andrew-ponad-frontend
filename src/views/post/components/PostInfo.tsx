import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faIcons, faUser } from "@fortawesome/free-solid-svg-icons";

import { useGetUserByIdQuery } from "../../global/slices/usersApiSlice";
import { setIsLoading } from "../../global/slices/globalStatesSlice";

import { StyledPostInfo } from "../styles/PostInfo.styled";
import { Post } from "../slices/postsApiSlice";

export default function PostInfo({ postData }: { postData: Partial<Post> }) {
  const userId = postData.author as string;
  const { data: authorData, isLoading } = useGetUserByIdQuery(userId);
  const authorUsername = authorData?.entities[userId]?.username;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <StyledPostInfo>
      <div>
        <h2>{postData.title}</h2>
        {postData?.categoryName && (
          <p>
            <FontAwesomeIcon icon={faIcons} className="icon" />
            kategoria: <span>{postData.categoryName}</span>
          </p>
        )}
        <p>
          <FontAwesomeIcon icon={faEye} className="icon" />
          wyświetlenia: <span>{postData.views}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faUser} className="icon" />
          autor: <span>{authorUsername}</span>
        </p>
      </div>
    </StyledPostInfo>
  );
}
