import { StyledGradingScaleTable } from "../styles/GradingScaleTable.styled";
import gradingScales from "../data/gradingScales.json";

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
      <ul>
        {Object.keys(gradingScales[type]).map((key) => {
          const start = gradingScales[type][key][0] * maxPoints;
          const startFormattedNum = parseFloat(start.toFixed(2));
          const end = gradingScales[type][key][1] * maxPoints;
          const endFormattedNum = parseFloat(end.toFixed(2));
          const isScoredInRange =
            scoredPoints >= startFormattedNum &&
            scoredPoints <= endFormattedNum;

          return (
            <li key={key} className={isScoredInRange ? "gradeObtained" : ""}>
              <div>{key}</div>
              <p>
                {startFormattedNum} - {endFormattedNum}
              </p>
            </li>
          );
        })}
      </ul>
    </StyledGradingScaleTable>
  );
}
