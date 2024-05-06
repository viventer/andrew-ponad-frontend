import React, { useEffect, useState } from "react";
import { StyledSlider } from "../styles/Slider.styled";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import useAuth from "../../../hooks/useAuth";
import SliderElement from "./SliderElement";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../global/slices/globalStatesSlice";

export default function Slider() {
  const { isLogged } = useAuth();

  const [visibleElementsIndexes, setVisibleElementsIndexes] = useState([
    0, 1, 2,
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
    const postsData = Object.entries(postsRawData.entities);
    elements = postsData.map(([id, postData], index) => (
      <SliderElement
        postData={postData}
        key={id}
        index={index}
        visibleElementsIndexes={visibleElementsIndexes}
      />
    ));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleElementsIndexes((prevIndexes) => {
        console.log(prevIndexes);
        const newVisibleElementsIndexes = prevIndexes.map((index) => {
          if (index < elements?.length - 1) {
            return index + 1;
          } else {
            return index % 3;
          }
        });

        return [...newVisibleElementsIndexes];
      });
    }, 100000000);

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
