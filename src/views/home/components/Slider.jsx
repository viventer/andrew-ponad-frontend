import React from "react";
import { StyledSlider } from "../styles/Slider.styled";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import useAuth from "../../../hooks/useAuth";
import SliderElement from "./SliderElement";

export default function Slider() {
  const { isLogged } = useAuth();

  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery({ isLogged });

  let postsData;

  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
  }

  return (
    <StyledSlider>
      {postsData &&
        postsData.map((postData, index) => (
          <SliderElement postData={postData} key={index} index={index} />
        ))}
    </StyledSlider>
  );
}
