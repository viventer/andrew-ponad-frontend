import React from "react";
import thumbnailPlaceholder from "../../post/image/thumbnailPlaceholder.jpg";
import { StyledZoomImg } from "../styles/ZoomImg.styled";
import Zoom from "react-medium-image-zoom";

export default function ZoomImg() {
  return (
    <StyledZoomImg>
      <Zoom>
        <img alt="Placeholder" src={thumbnailPlaceholder} width="500" />
      </Zoom>
    </StyledZoomImg>
  );
}
