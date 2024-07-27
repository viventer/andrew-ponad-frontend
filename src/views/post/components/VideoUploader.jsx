import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { selectErrMsg, setErrMsg } from "../../global/slices/globalStatesSlice";

import videoPlaceholder from "../images/videoPlaceholder.jpg";

import ReactPlayer from "react-player";
import { StyledVideoUploader } from "../styles/VideoUploader.styled";

export default function VideoUploader({ setVideoUrl, videoUrl }) {
  const dispatch = useDispatch();
  const errMsg = useSelector(selectErrMsg);
  const [isInputShown, setIsInputShown] = useState(false);

  const isValidUrl = (url) => {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };

  return (
    <StyledVideoUploader className="responsivePostElement">
      <div className="urlInputWrapper">
        <button onClick={() => setIsInputShown((prev) => !prev)}>
          <FontAwesomeIcon icon={faLink} />
          <label htmlFor="urlInput">Link do filmu</label>
        </button>
        <input
          type="text"
          id="urlInput"
          value={videoUrl}
          onChange={(e) => dispatch(setVideoUrl(e.target.value))}
          onKeyDown={() => {
            if (videoUrl.length >= 100) {
              dispatch(
                setErrMsg("Długość linku nie może przekraczać 100 znaków.")
              );
            }
          }}
          maxLength={100}
          className={isInputShown ? "shown" : ""}
        />
      </div>
      <div className="reactPlayerWrapper">
        {isValidUrl(videoUrl) && !errMsg ? (
          <ReactPlayer
            url={videoUrl}
            controls={true}
            light={true}
            className="reactPlayer"
            onError={() =>
              dispatch(setErrMsg("Podany adres URL jest nieprawidłowy."))
            }
          />
        ) : (
          <img
            src={videoPlaceholder}
            className="reactPlayer videoPlaceholder"
            alt="Video placeholder"
          />
        )}
      </div>
    </StyledVideoUploader>
  );
}
