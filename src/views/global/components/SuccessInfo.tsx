import { StyledSuccessInfo } from "../styles/SuccessInfo.styled";

export default function SuccessInfo({ message }: { message: string }) {
  return <StyledSuccessInfo>{message}</StyledSuccessInfo>;
}
