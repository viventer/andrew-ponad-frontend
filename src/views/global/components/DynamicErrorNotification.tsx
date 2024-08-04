import { StyledDynamicErrorNotification } from "../styles/DynamicErrorNotification.styled";

type Props = {
  message: string;
  view?: string;
};

export default function DynamicErrorNotification({ message, view }: Props) {
  return (
    <StyledDynamicErrorNotification
      className={`${!message ? "hide" : ""} ${
        view == "gradeCalc" ? "gradeCalc" : ""
      }`}
    >
      <p>{message}</p>
    </StyledDynamicErrorNotification>
  );
}
