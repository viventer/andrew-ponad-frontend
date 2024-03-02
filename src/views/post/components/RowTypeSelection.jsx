import { StyledRowTypeSelection } from "../styles/RowTypeSelection.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faClose,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectPostRows, setPostRows } from "../slices/postSlice";

export default function RowTypeSelection({ index, changeRowType }) {
  const dispatch = useDispatch();

  const postRows = useSelector(selectPostRows);

  const deleteRow = (rowIndex) => {
    const newRows = postRows.filter((row, index) => index !== rowIndex);
    dispatch(setPostRows([...newRows]));
  };

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
