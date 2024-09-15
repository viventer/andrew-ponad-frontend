import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faIcons, faUser } from "@fortawesome/free-solid-svg-icons";

import {
  useGetUserByIdQuery,
  useGetUsernameQuery,
} from "../../global/slices/usersApiSlice";
import { setIsLoading } from "../../global/slices/globalStatesSlice";

import { StyledPostInfo } from "../styles/PostInfo.styled";
import { PostType } from "../types/post.types";

export default function PostInfo({
  postData,
}: {
  postData: Partial<PostType>;
}) {
  const userId = postData.author as string;
  const { data: authorData, isLoading } = useGetUsernameQuery(userId);

  const authorUsername = authorData?.username;
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
        <h2 data-test="postInfoTitle">{postData.title}</h2>
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
