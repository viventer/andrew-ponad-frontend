import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import useAuth from "../../../hooks/useAuth";

import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";

import { StyledSlider } from "../styles/Slider.styled";
import SliderElement from "./SliderElement";
import { PostEntity } from "../../post/types/post.types";

export default function Slider() {
  const { isLogged } = useAuth();

  const [visibleElementsIndexes, setVisibleElementsIndexes] = useState([
    1, 2, 3, 4,
  ]);

  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery({ isLogged });

  let elements;
  if (isSuccess) {
    const postsData: PostEntity[] = Object.entries(postsRawData.entities);
    const filteredPostsData = postsData.filter(([id, postData]) =>
      postData.visibility != "draft" && postData.visibility != "unlisted"
        ? true
        : false
    );
    elements = filteredPostsData.map(([id, postData], index) => (
      <SliderElement
        postData={postData}
        key={id}
        index={index}
        visibleElementsIndexes={visibleElementsIndexes}
      />
    ));
  } else if (isError) {
    setErrMsg(
      error?.message || "Nie udało się załadować postów. Odśwież stronę."
    );
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleElementsIndexes((prevIndexes) => {
        const newVisibleElementsIndexes = prevIndexes.map((index) => {
          if (index > 0) {
            return index - 1;
          } else {
            return elements?.length - 1;
          }
        });

        return [...newVisibleElementsIndexes];
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [elements]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

  return <StyledSlider>{elements && elements}</StyledSlider>;
}
