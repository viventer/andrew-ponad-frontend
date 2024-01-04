import { StyledErrorInfo } from "../styles/ErrorInfo.styled";

export default function ErrorInfo({ message }) {
  return (
    <StyledErrorInfo className={!message && "hide"}>
      <p>{message?.error || message?.message || message}</p>
    </StyledErrorInfo>
  );
}
