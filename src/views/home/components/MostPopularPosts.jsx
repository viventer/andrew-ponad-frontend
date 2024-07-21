import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAuth from "../../../hooks/useAuth";

import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import {
  selectIsLoading,
  setErrMsg,
  setIsLoading,
} from "../../global/slices/globalStatesSlice";

import { StyledButton } from "../../global/styles/Button.styled";
import { StyledMostPopularPosts } from "../styles/MostPopularPosts.styled";
import PostFromSection from "./PostFromSection";

export default function MostPopularPosts() {
  const { isLogged } = useAuth();
  const [areExpanded, setAreExpanded] = useState(false);

  const {
    data: postsRawData,
    isLoading: isDataLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery({ isLogged });

  let postsData;
  let sortedPostsData;
  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
    sortedPostsData = postsData.sort((post1, post2) => {
      const post1Views = post1[1].views;
      const post2Views = post2[1].views;
      return post2Views - post1Views;
    });
    console.log(sortedPostsData);
  }

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDataLoading) {
      dispatch(setIsLoading(true));
    } else if (isError) {
      dispatch(setIsLoading(false));
      dispatch(
        setErrMsg(
          error?.message || "Błąd pobierania najpopularniejszych postów."
        )
      );
    } else if (isSuccess) {
      dispatch(setIsLoading(false));
    }
  }, [isDataLoading, isError, isSuccess]);

  return (
    !isLoading && (
      <StyledMostPopularPosts>
        <h3>Najpopularniejsze posty</h3>
        <section>
          {sortedPostsData &&
            sortedPostsData.map(([id, postData], index) => (
              <PostFromSection
                postData={postData}
                key={id}
                index={index}
                areExpanded={areExpanded}
              />
            ))}
        </section>
        <StyledButton onClick={() => setAreExpanded((prev) => !prev)}>
          <FontAwesomeIcon icon={areExpanded ? faChevronUp : faChevronDown} />
        </StyledButton>
      </StyledMostPopularPosts>
    )
  );
}
