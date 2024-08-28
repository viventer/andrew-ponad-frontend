import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

import { selectErrMsg, setErrMsg } from "../../global/slices/globalStatesSlice";

import videoPlaceholder from "../images/videoPlaceholder.jpg";

import { StyledVideoUploader } from "../styles/VideoUploader.styled";

type Props = {
  setVideoUrl: (url: string) => void;
  videoUrl: string | undefined;
  setActiveRowNumber: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

export default function VideoUploader({
  setVideoUrl,
  videoUrl,
  setActiveRowNumber,
  index,
}: Props) {
  const dispatch = useDispatch();
  const errMsg = useSelector(selectErrMsg);
  const [isInputShown, setIsInputShown] = useState(false);

  const isValidUrl = (url: string) => {
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
          onChange={(e) => setVideoUrl(e.target.value)}
          onKeyDown={() => {
            if (typeof videoUrl === "string" && videoUrl.length >= 100) {
              dispatch(
                setErrMsg("Długość linku nie może przekraczać 100 znaków.")
              );
            }
          }}
          maxLength={128}
          className={isInputShown ? "shown" : ""}
        />
      </div>
      <div className="reactPlayerWrapper">
        {typeof videoUrl === "string" && isValidUrl(videoUrl) && !errMsg ? (
          <ReactPlayer
            url={videoUrl}
            controls={true}
            light={true}
            className="reactPlayer"
            onError={() =>
              dispatch(setErrMsg("Podany adres URL jest nieprawidłowy."))
            }
            onPlay={() => setActiveRowNumber(index)}
            onPause={() => setActiveRowNumber(index)}
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
