import useAuth from "../../../hooks/useAuth";
import useTranslateVisibility from "../../../hooks/useTranslateVisibility";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import { StyledMostPopularPosts } from "../styles/MostPopularPosts.styled";
import PostFromSection from "./PostFromSection";

export default function MostPopularPosts() {
  const { isLogged } = useAuth();

  const {
    data: postsRawData,
    isLoading,
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

  return (
    <StyledMostPopularPosts>
      <h3>Najpopularniejsze posty</h3>
      <section>
        {sortedPostsData &&
          sortedPostsData.map(([id, postData], index) => {
            return (
              <PostFromSection postData={postData} key={id} index={index} />
            );
          })}
      </section>
    </StyledMostPopularPosts>
  );
}
