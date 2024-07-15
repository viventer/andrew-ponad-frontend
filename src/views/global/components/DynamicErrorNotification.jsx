import { StyledDynamicErrorNotification } from "../styles/DynamicErrorNotification.styled";

export default function DynamicErrorNotification({ message, view }) {
  return (
    <StyledDynamicErrorNotification
      className={`${!message ? "hide" : ""} ${
        view == "gradeCalc" ? "gradeCalc" : ""
      }`}
    >
      <p>{message?.error || message?.message || message}</p>
    </StyledDynamicErrorNotification>
  );
}
