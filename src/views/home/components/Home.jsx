import React, { useState } from "react";
import { StyledHome } from "../styles/Home.styled";
import Slider from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <StyledHome>
      <Slider />
      <section className="headingSection">
        <h2>Andrzej Pławecki</h2>
        <div>
          <span>
            <FontAwesomeIcon icon={faAnglesRight} className="icon" />
          </span>
          <p>wymiana informacji pomiędzy uczniami</p>
        </div>
      </section>
    </StyledHome>
  );
}
