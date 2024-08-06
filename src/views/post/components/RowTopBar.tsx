import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faArrowDown,
  faArrowUp,
  faClose,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import { StyledRowTopBar } from "../styles/RowTopBar.styled";
import { PostRowElementType } from "../slices/postsApiSlice";

type Props = {
  index: number;
  changeRowType: (
    rowIndex: number,
    firstElementType: PostRowElementType,
    secondElementType: PostRowElementType
  ) => void;
  deleteRow: (rowIndex: number) => void;
  changeRowIndex: (oldRowIndex: number, newRowIndex: number) => void;
  isLast: boolean;
};

export default function RowTopBar({
  index,
  changeRowType,
  deleteRow,
  changeRowIndex,
  isLast,
}: Props) {
  return (
    <StyledRowTopBar>
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
        <div
          onClick={() => {
            changeRowType(index, "video", "none");
          }}
        >
          <FontAwesomeIcon icon={faVideo} />
        </div>
      </div>
      <div className="barRightSide">
        <div>
          {index != 0 && (
            <div onClick={() => changeRowIndex(index, index - 1)}>
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          )}
          {!isLast && (
            <div onClick={() => changeRowIndex(index, index + 1)}>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          )}
        </div>
        {index != 0 && (
          <div
            onClick={() => {
              deleteRow(index);
            }}
          >
            <FontAwesomeIcon icon={faClose} className="deleteIcon" />
          </div>
        )}
      </div>
    </StyledRowTopBar>
  );
}
