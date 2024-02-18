import { StyledRowTypeSelection } from "../styles/RowTypeSelection.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faClose,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setPostRows } from "../slices/postSlice";

export default function RowTypeSelection({ index, updateElement }) {
  const dispatch = useDispatch();

  const deleteRow = (rowIndex) => {
    dispatch(
      setPostRows((prevRows) => {
        const newPostRows = prevRows.filter((row, index) => index !== rowIndex);

        return newPostRows;
      })
    );
  };

  return (
    <StyledRowTypeSelection>
      <div>
        <div
          onClick={() => {
            updateElement(index, 0, { type: "textEditor" });
            updateElement(index, 1, { type: "none" });
          }}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </div>
        <div
          onClick={() => {
            updateElement(index, 0, { type: "image" });
            updateElement(index, 1, { type: "none" });
          }}
        >
          <FontAwesomeIcon icon={faImage} />
        </div>
        <div
          onClick={() => {
            updateElement(index, 0, { type: "textEditor" });
            updateElement(index, 1, { type: "image" });
          }}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
          <FontAwesomeIcon icon={faImage} />
        </div>
        <div
          onClick={() => {
            updateElement(index, 0, { type: "image" });
            updateElement(index, 1, { type: "textEditor" });
          }}
        >
          <FontAwesomeIcon icon={faImage} />
          <FontAwesomeIcon icon={faAlignLeft} />
        </div>
        <div
          onClick={() => {
            updateElement(index, 0, { type: "image" });
            updateElement(index, 1, { type: "image" });
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
