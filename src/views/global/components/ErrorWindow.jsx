import { StyledErrorWindow } from "../styles/ErrorWindow.styled";

export default function ErrorWindow({ message }) {
  return (
    <StyledErrorWindow className="flex-center">
      <p>{message}</p>
    </StyledErrorWindow>
  );
}
