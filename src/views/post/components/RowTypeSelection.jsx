import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faClose,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

import { StyledRowTypeSelection } from "../styles/RowTypeSelection.styled";

export default function RowTypeSelection({ index, changeRowType, deleteRow }) {
  const dispatch = useDispatch();

  return (
    <StyledRowTypeSelection>
      <div>
        <div
          onClick={() => {
            changeRowType(index, "textEditor", "none");
          }}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </div>
        <div
          onClick={() => {
            changeRowType(index, "image", "none");
          }}
        >
          <FontAwesomeIcon icon={faImage} />
        </div>
        <div
          onClick={() => {
            changeRowType(index, "textEditor", "image");
          }}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
          <FontAwesomeIcon icon={faImage} />
        </div>
        <div
          onClick={() => {
            changeRowType(index, "image", "textEditor");
          }}
        >
          <FontAwesomeIcon icon={faImage} />
          <FontAwesomeIcon icon={faAlignLeft} />
        </div>
        <div
          onClick={() => {
            changeRowType(index, "image", "image");
          }}
        >
          <FontAwesomeIcon icon={faImage} />
          <FontAwesomeIcon icon={faImage} />
        </div>
      </div>
      {index != 0 && (
        <div
          onClick={() => {
            deleteRow(index);
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </div>
      )}
    </StyledRowTypeSelection>
  );
}
