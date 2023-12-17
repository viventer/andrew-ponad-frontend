import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledRowTypeSelection } from "../styles/PostContentEditor.styled";
import {
  faAlignLeft,
  faClose,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

export default function RowTypeSelection({ setRowElementsType, index }) {
  return (
    <StyledRowTypeSelection>
      <div>
        <div
          onClick={() => {
            setRowElementsType(["textEditor"]);
          }}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </div>
        <div
          onClick={() => {
            setRowElementsType(["image"]);
          }}
        >
          <FontAwesomeIcon icon={faImage} />
        </div>
        <div
          onClick={() => {
            setRowElementsType(["textEditor", "image"]);
          }}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
          <FontAwesomeIcon icon={faImage} />
        </div>
        <div
          onClick={() => {
            setRowElementsType(["image", "textEditor"]);
          }}
        >
          <FontAwesomeIcon icon={faImage} />
          <FontAwesomeIcon icon={faAlignLeft} />
        </div>
        <div
          onClick={() => {
            setRowElementsType(["image", "image"]);
          }}
        >
          <FontAwesomeIcon icon={faImage} />
          <FontAwesomeIcon icon={faImage} />
        </div>
      </div>
      {index != 0 && (
        <div
          onClick={() => {
            setRowElementsType(["none"]);
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </div>
      )}
    </StyledRowTypeSelection>
  );
}
