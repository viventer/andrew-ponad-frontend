import { StyledDynamicErrorNotification } from "../styles/DynamicErrorNotification.styled";

export default function DynamicErrorNotification({ message }) {
  return (
    <StyledDynamicErrorNotification className={!message ? "hide" : ""}>
      <p>{message?.error || message?.message || message}</p>
    </StyledDynamicErrorNotification>
  );
}
