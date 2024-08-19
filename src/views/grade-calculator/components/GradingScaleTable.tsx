import gradingScales from "../data/gradingScales.json";

import { StyledGradingScaleTable } from "../styles/GradingScaleTable.styled";

type Props = {
  type: "written" | "choice" | "practice";
  maxPoints: string;
  scoredPoints: string;
  isErr: boolean;
};

type GradingScaleType = {
  [key: string]: [number, number];
};

export default function GradingScaleTable({
  type,
  maxPoints,
  scoredPoints,
  isErr,
}: Props) {
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

  const scale = (gradingScales as any)[type];

  return (
    <StyledGradingScaleTable>
      <h2>{headingText}</h2>
      <ul>
        {Object.keys(scale).map((key, index, array) => {
          if (isErr) {
            return (
              <li key={key}>
                <div>{key}</div>
                <p> - </p>
              </li>
            );
          }

          const start = scale[key][0] * parseFloat(maxPoints);
          const end = scale[key][1] * parseFloat(maxPoints);

          let startFormattedNum = parseFloat(start.toFixed(2));
          let endFormattedNum = parseFloat(end.toFixed(2));
          const scoredNum = parseFloat(scoredPoints);

          if (index > 0) {
            const prevEnd = scale[array[index - 1]][1] * parseFloat(maxPoints);
            const prevEndFormattedNum = parseFloat(prevEnd.toFixed(2));
            startFormattedNum = parseFloat(
              (prevEndFormattedNum + 0.01).toFixed(2)
            );
          }

          const startFormattedStr = startFormattedNum.toFixed(2);
          const endFormattedStr = endFormattedNum.toFixed(2);

          const isScoredInRange =
            scoredNum >= startFormattedNum && scoredNum <= endFormattedNum;

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
