import React from "react";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../../global/slices/globalStatesSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import { StyledHome } from "../styles/Home.styled";
import Slider from "./Slider";

export default function Home() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <StyledHome>
      <Slider />
      {!isLoading && (
        <section className="headingSection">
          <h2>Andrzej Pławecki</h2>
          <div>
            <span>
              <FontAwesomeIcon icon={faAnglesRight} className="icon" />
            </span>
            <p>wymiana informacji pomiędzy uczniami</p>
          </div>
        </section>
      )}
    </StyledHome>
  );
}
