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
  }, []);

  const validatePoints = () => {
    const scoredPointsNum = parseFloat(scoredPoints);
    const maxPointsNum = parseFloat(maxPoints);

    setIsScoredPointsValid(true);
    setIsMaxPointsValid(true);

    if (
      (!scoredPointsNum && scoredPointsNum !== 0) ||
      (!maxPointsNum && maxPointsNum !== 0)
    ) {
      setIsScoredPointsValid(false);
      setIsMaxPointsValid(false);
      setScoredPointsErrMsg("");
      setMaxPointsErrMsg("");
    } else if (scoredPointsNum < 0) {
      setIsScoredPointsValid(false);
      setScoredPointsErrMsg(
        "Liczba zdobytych punktów nie może być mniejsza od 0."
      );
    } else if (maxPointsNum <= 0) {
      console.log("tak");
      setIsMaxPointsValid(false);
      setMaxPointsErrMsg("Maksymalna liczba punktów musi być większa od 0.");
    } else if (scoredPointsNum > 9999) {
      setIsScoredPointsValid(false);
      setScoredPointsErrMsg(
        "Liczba zdobytych punktów nie może być większa od 9999."
      );
    } else if (maxPointsNum > 9999) {
      setIsMaxPointsValid(false);
      setMaxPointsErrMsg(
        "Maksumalna liczba punktów nie może być większa od 9999."
      );
    } else if (maxPointsNum < scoredPointsNum) {
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
          type="scoredPointsInput"
        />
        <GradeCalculatorInput
          text="Maksymalna liczba punktów"
          setter={setMaxPoints}
          value={maxPoints}
          inputRef={maxPointsInputRef}
          isValid={isMaxPointsValid}
          errMsg={maxPointsErrMsg}
          type="maxPointsInput"
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
