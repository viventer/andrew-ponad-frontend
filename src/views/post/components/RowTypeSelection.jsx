import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledRowTypeSelection } from "../styles/PostContentEditor.styled";
import { faAlignLeft, faImage } from "@fortawesome/free-solid-svg-icons";

export default function RowTypeSelection({
  rowElementsType,
  setRowElementsType,
}) {
  return (
    <StyledRowTypeSelection>
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
    </StyledRowTypeSelection>
  );
}
