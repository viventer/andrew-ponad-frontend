import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faIcons, faUser } from "@fortawesome/free-solid-svg-icons";

import { useGetUserByIdQuery } from "../../global/slices/usersApiSlice";
import { setIsLoading } from "../../global/slices/globalStatesSlice";

import { StyledPostInfo } from "../styles/PostInfo.styled";

export default function PostInfo({ postData }) {
  const { data: authorData, isLoading } = useGetUserByIdQuery(postData.author);
  const authorUsername =
    authorData?.entities[postData?.author]?.username ||
    authorData?.entities[undefined].username;
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
        {postData.category != "Wybierz kategorię" && (
          <p>
            <FontAwesomeIcon icon={faIcons} className="icon" />
            kategoria: <span>{postData.category}</span>
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
