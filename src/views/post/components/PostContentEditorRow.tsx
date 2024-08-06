import ReactQuill from "react-quill";
import ImageDropzone from "../../global/components/ImageDropzone";

import thumbnailPlaceholder from "../images/thumbnailPlaceholder.jpg";

import RowTopBar from "./RowTopBar";
import VideoUploader from "./VideoUploader";
import { StyledPostContentEditorRow } from "../styles/PostContentEditorRow.styled";
import {
  PostRowElement,
  PostRowElementType,
  PostRowType,
} from "../slices/postsApiSlice";

type Props = {
  activeRowNumber: number;
  setActiveRowNumber: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  rowData: PostRowType;
  updateElement: (
    rowIndex: number,
    elementIndex: number,
    updatedFields: Partial<PostRowElement>
  ) => void;
  changeRowType: (
    rowIndex: number,
    firstElementType: PostRowElementType,
    secondElementType: PostRowElementType
  ) => void;
  deleteRow: (rowIndex: number) => void;
  changeRowIndex: (oldRowIndex: number, newRowIndex: number) => void;
  isLast: boolean;
};

export default function PostContentEditorRow({
  activeRowNumber,
  setActiveRowNumber,
  index,
  rowData,
  updateElement,
  changeRowType,
  deleteRow,
  changeRowIndex,
  isLast,
}: Props) {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, false] }],
    [{ color: [] }],
    [{ align: [] }],
  ];
  const quillModules = { toolbar: toolbarOptions };

  return (
    <StyledPostContentEditorRow>
      {activeRowNumber == index && (
        <RowTopBar
          index={index}
          changeRowType={changeRowType}
          changeRowIndex={changeRowIndex}
          deleteRow={deleteRow}
          isLast={isLast}
        />
      )}
      <div
        className={`flex flex-center ${
          rowData[1].type == "none" ? "onlyOneElement" : ""
        } ${activeRowNumber == index ? "active" : ""} ${
          rowData[0].type == "video" ? "videoElementWrapper" : ""
        }`}
        onClick={() => {
          setActiveRowNumber(index);
        }}
      >
        {rowData.map((elementData, i) => {
          const imagePreview = rowData[i].imagePreview;
          const videoUrl = rowData[i].videoUrl;
          const setImagePreview = (url: string) => {
            updateElement(index, i, { imagePreview: url });
          };
          const setVideoUrl = (url: string) => {
            updateElement(index, i, { videoUrl: url });
          };

          if (elementData.type === "image") {
            return (
              <div className="responsivePostElement" key={i}>
                <img src={imagePreview || thumbnailPlaceholder} />
                <ImageDropzone
                  imagePreview={rowData[i].imagePreview!}
                  setImagePreview={setImagePreview}
                />
              </div>
            );
          } else if (elementData.type === "textEditor") {
            return (
              <ReactQuill
                key={i + 10}
                theme="snow"
                value={rowData[i].textEditorContent}
                onChange={(content) => {
                  updateElement(index, i, { textEditorContent: content });
                }}
                modules={quillModules}
                className="quillEditor responsivePostElement"
              />
            );
          } else if (elementData.type === "video") {
            return (
              <VideoUploader
                setActiveRowNumber={setActiveRowNumber}
                index={index}
                setVideoUrl={setVideoUrl}
                key={i - 11}
                videoUrl={videoUrl}
              />
            );
          }
        })}
      </div>
    </StyledPostContentEditorRow>
  );
}
