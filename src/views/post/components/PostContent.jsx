import { StyledPostContent } from "../styles/PostContent.styled";
import PostRow from "./PostRow";

export default function PostContent({ postContentData }) {
  const postRows = postContentData.map((rowData, i) => (
    <PostRow rowData={rowData} key={i} />
  ));

  return <StyledPostContent>{postRows}</StyledPostContent>;
}
