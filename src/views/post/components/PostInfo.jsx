import { useEffect } from "react";
import { useGetUserByIdQuery } from "../../global/slices/usersApiSlice";
import { StyledPostInfo } from "../styles/PostInfo.styled";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../global/slices/globalStatesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faIcons, faUser } from "@fortawesome/free-solid-svg-icons";

export default function PostInfo({ postData }) {
  const { data: authorData, isLoading } = useGetUserByIdQuery(postData.author);
  const authorUsername = authorData?.entities[postData.author].username;
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
        <p>
          <FontAwesomeIcon icon={faIcons} className="icon" />
          kategoria: <span>{postData.category}</span>
        </p>
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
