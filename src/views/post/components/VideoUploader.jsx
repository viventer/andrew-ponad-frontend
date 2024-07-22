import ReactPlayer from "react-player";
import { StyledVideoUploader } from "../styles/VideoUploader.styled";
import { useDispatch } from "react-redux";
import { setErrMsg } from "../../global/slices/globalStatesSlice";

export default function VideoUploader({ setVideoUrl, videoUrl }) {
  const dispatch = useDispatch();

  return (
    <StyledVideoUploader className="responsivePostElement">
      <div className="urlInputWrapper">
        <label htmlFor="urlInput">Link do filmu</label>
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
        />
      </div>
      <div className="reactPlayerWrapper">
        <ReactPlayer
          url={videoUrl}
          controls={true}
          light={true}
          className="reactPlayer"
        />
      </div>
    </StyledVideoUploader>
  );
}
