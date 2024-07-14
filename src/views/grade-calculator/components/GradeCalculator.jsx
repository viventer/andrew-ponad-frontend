import { useEffect, useRef, useState } from "react";
import { StyledGradeCalculator } from "../styles/GradeCalculator.styled";
import GradeCalculatorInput from "./GradeCalculatorInput";
import GradingScaleTable from "./GradingScaleTable";

export default function GradeCalculator() {
  const [scoredPoints, setScoredPoints] = useState(null);
  const [maxPoints, setMaxPoints] = useState(null);
  const [isScoredPointsValid, setIsScoredPointsValid] = useState(null);
  const [isMaxPointsValid, setIsMaxPointsValid] = useState(null);
  const [scoredPointsErrMsg, setScoredPointsErrMsg] = useState("");
  const [maxPointsErrMsg, setMaxPointsErrMsg] = useState("");

  const scoredPointsInputRef = useRef();
  const maxPointsInputRef = useRef();

  useEffect(() => {
    scoredPointsInputRef.current.focus();
  });

  const validatePoints = () => {
    if (!scoredPoints || !maxPoints) {
      setIsScoredPointsValid(false);
      setIsMaxPointsValid(false);
      setScoredPointsErrMsg("");
      setMaxPointsErrMsg("");
    } else if (scoredPoints < 0) {
      setIsScoredPointsValid(false);
      setScoredPointsErrMsg(
        "Liczba zdobytych punktów nie może być mniejsza od 0."
      );
    } else if (maxPoints <= 0) {
      setIsMaxPointsValid(false);
      setMaxPointsErrMsg("Maksymalna liczba punktów musi być większa od 0.");
    } else if (scoredPoints > 9999) {
      setIsScoredPointsValid(false);
      setScoredPointsErrMsg(
        "Liczba zdobytych punktów nie może być większa od 9999."
      );
    } else if (maxPoints > 9999) {
      setIsMaxPointsValid(false);
      setMaxPointsErrMsg(
        "Maksumalna liczba punktów nie może być większa od 9999."
      );
    } else if (maxPoints < scoredPoints && maxPoints && scoredPoints) {
      setIsMaxPointsValid(false);
      setIsScoredPointsValid(false);
      setMaxPointsErrMsg(
        "Maksymalna liczba punktów nie może być mniejsza od liczby zdobytych."
      );
    } else {
      setIsMaxPointsValid(true);
      setIsScoredPointsValid(true);
      setMaxPointsErrMsg("");
      setScoredPointsErrMsg("");
    }
  };

  useEffect(() => {
    validatePoints();
  }, [scoredPoints, maxPoints]);

  const showTables = isMaxPointsValid && isScoredPointsValid;

  return (
    <StyledGradeCalculator>
      <div className="inputsWrapper">
        <GradeCalculatorInput
          text="Liczba zdobytych punktów"
          setter={setScoredPoints}
          value={scoredPoints}
          inputRef={scoredPointsInputRef}
          isValid={isScoredPointsValid}
          errMsg={scoredPointsErrMsg}
        />
        <GradeCalculatorInput
          text="Maksymalna liczba punktów"
          setter={setMaxPoints}
          value={maxPoints}
          inputRef={maxPointsInputRef}
          isValid={isMaxPointsValid}
          errMsg={maxPointsErrMsg}
        />
      </div>
      {showTables && (
        <div className="tablesWrapper">
          <GradingScaleTable
            type="written"
            maxPoints={maxPoints}
            scoredPoints={scoredPoints}
          />
          <GradingScaleTable
            type="choice"
            maxPoints={maxPoints}
            scoredPoints={scoredPoints}
          />
          <GradingScaleTable
            type="practice"
            maxPoints={maxPoints}
            scoredPoints={scoredPoints}
          />
        </div>
      )}
    </StyledGradeCalculator>
  );
}
