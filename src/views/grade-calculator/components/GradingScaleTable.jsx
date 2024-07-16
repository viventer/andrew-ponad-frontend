import { StyledGradingScaleTable } from "../styles/GradingScaleTable.styled";
import gradingScales from "../data/gradingScales.json";

export default function GradingScaleTable({
  type,
  maxPoints,
  scoredPoints,
  isErr,
}) {
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
    default:
      headingText = "";
  }

  return (
    <StyledGradingScaleTable>
      <h2>{headingText}</h2>
      <ul>
        {Object.keys(gradingScales[type]).map((key, index, array) => {
          if (isErr) {
            return (
              <li key={key}>
                <div>{key}</div>
                <p> - </p>
              </li>
            );
          }

          const start = gradingScales[type][key][0] * parseFloat(maxPoints);
          const end = gradingScales[type][key][1] * parseFloat(maxPoints);

          let startFormattedNum = parseFloat(start.toFixed(1));
          let endFormattedNum = parseFloat(end.toFixed(1));

          if (index > 0) {
            const prevEnd =
              gradingScales[type][array[index - 1]][1] * parseFloat(maxPoints);
            const prevEndFormattedNum = parseFloat(prevEnd.toFixed(1));
            startFormattedNum = parseFloat(
              (prevEndFormattedNum + 0.1).toFixed(1)
            );
          }

          const startFormattedStr = startFormattedNum.toFixed(1);
          const endFormattedStr = endFormattedNum.toFixed(1);

          const isScoredInRange =
            scoredPoints >= startFormattedNum &&
            scoredPoints <= endFormattedNum;

          return (
            <li key={key} className={isScoredInRange ? "gradeObtained" : ""}>
              <div>{key}</div>
              <p>
                {startFormattedStr} - {endFormattedStr}
              </p>
            </li>
          );
        })}
      </ul>
    </StyledGradingScaleTable>
  );
}
