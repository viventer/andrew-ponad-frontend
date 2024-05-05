import React, { useState } from "react";
import { StyledHome } from "../styles/Home.styled";
import Slider from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <StyledHome>
      <div className="container">
        <Slider />
        <div className="section">
          <h2>Andrzej Pławecki</h2>
          <p>
            <span>
              <FontAwesomeIcon icon={faAnglesRight} />
            </span>
            wymiana informacji pomiędzy uczniami
          </p>
        </div>
      </div>
    </StyledHome>
  );
}
