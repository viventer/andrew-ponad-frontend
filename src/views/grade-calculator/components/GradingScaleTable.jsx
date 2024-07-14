import { StyledGradingScaleTable } from "../styles/GradingScaleTable.styled";

export default function GradingScaleTable({ type, maxPoints, scoredPoints }) {
  let headingText;
  switch (type) {
    case "written":
      headingText = "Test pisemny";
      break;
    case "choice":
      headingText = "Test wyboru";
      break;
    case "practice":
      headingText = "Test praktyczny";
      break;
  }

  return (
    <StyledGradingScaleTable>
      <h2>{headingText}</h2>
    </StyledGradingScaleTable>
  );
}
