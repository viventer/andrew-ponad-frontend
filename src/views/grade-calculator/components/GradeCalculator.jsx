import { useEffect, useRef, useState } from "react";
import { StyledGradeCalculator } from "../styles/GradeCalculator.styled";
import GradeCalculatorInput from "./GradeCalculatorInput";
import GradingScaleTable from "./GradingScaleTable";
import FixedErrorModal from "../../global/components/FixedErrorModal";
import DynamicErrorNotification from "../../global/components/DynamicErrorNotification";

export default function GradeCalculator() {
  const [scoredPoints, setScoredPoints] = useState(null);
  const [maxPoints, setMaxPoints] = useState(null);
  const [isScoredPointsValid, setIsScoredPointsValid] = useState(null);
  const [isMaxPointsValid, setIsMaxPointsValid] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  const scoredPointsInputRef = useRef();
  const maxPointsInputRef = useRef();

  useEffect(() => {
    scoredPointsInputRef.current.focus();
    setErrMsg("");
  }, []);

  const validateScoredPoints = () => {
    const scoredPointsTrimmed = scoredPoints?.trim();
    if (!/^\d*\.?\d*$/.test(scoredPointsTrimmed) && scoredPointsTrimmed) {
      setIsScoredPointsValid(false);
      setErrMsg("Pola mogą zawierać tylko liczby, do separacji używaj kropek.");
      return;
    }

    const scoredPointsNum = parseFloat(scoredPoints);
    const maxPointsNum = parseFloat(maxPoints);

    if (!scoredPointsNum && scoredPointsNum != 0) {
      setIsScoredPointsValid(false);
      setErrMsg("");
    } else if (scoredPointsNum > maxPointsNum) {
      setIsScoredPointsValid(false);
      setErrMsg(
        "Liczba zdobytych punktów nie może być większa od maksymalnej."
      );
    } else if (scoredPointsNum < 0) {
      setIsScoredPointsValid(false);
      setErrMsg("Liczba zdobytych punktów nie może być mniejsza niż 0.");
    } else if (scoredPointsNum > 9999) {
      setIsScoredPointsValid(false);
      setErrMsg("Liczba zdobytych punktów nie może być większa niż 9999.");
    }
  };

  const validateMaxPoints = () => {
    const maxPointsTrimmed = maxPoints?.trim();
    if (!/^\d*\.?\d*$/.test(maxPointsTrimmed) && maxPointsTrimmed) {
      setIsMaxPointsValid(false);
      setErrMsg("Pola mogą zawierać tylko liczby, do separacji używaj kropek.");
      return;
    }

    const scoredPointsNum = parseFloat(scoredPoints);
    const maxPointsNum = parseFloat(maxPoints);
    console.log(maxPointsNum);

    if (!maxPointsNum && maxPointsNum != 0) {
      setIsMaxPointsValid(false);
      setErrMsg("");
    } else if (maxPointsNum < scoredPointsNum) {
      setIsMaxPointsValid(false);
      setErrMsg(
        "Maksymalna liczba punktów nie może być mniejsza od liczby zdobytych."
      );
    } else if (maxPointsNum < 1) {
      setIsMaxPointsValid(false);
      setErrMsg("Maksymalna liczba punktów nie może być mniejsza od 1.");
    } else if (maxPointsNum > 9999) {
      setIsMaxPointsValid(false);
      setErrMsg("Maksymalna liczba punktów nie może być większa niż 9999.");
    }
  };

  useEffect(() => {
    setErrMsg("");
    setIsMaxPointsValid(true);
    setIsScoredPointsValid(true);
    validateScoredPoints();
    validateMaxPoints();
  }, [scoredPoints, maxPoints]);

  const isErr = !isMaxPointsValid || !isScoredPointsValid;

  return (
    <StyledGradeCalculator>
      <div className="gradeCalculatorWrapper">
        <div className="upperWrapper">
          <div className="inputsWrapper">
            <GradeCalculatorInput
              text="Liczba zdobytych punktów"
              setter={setScoredPoints}
              value={scoredPoints}
              inputRef={scoredPointsInputRef}
              isValid={isScoredPointsValid}
              type="scoredPointsInput"
            />
            <GradeCalculatorInput
              text="Maksymalna liczba punktów"
              setter={setMaxPoints}
              value={maxPoints}
              inputRef={maxPointsInputRef}
              isValid={isMaxPointsValid}
              type="maxPointsInput"
            />
          </div>
          <DynamicErrorNotification message={errMsg} view="gradeCalc" />
        </div>
        <div className="tablesWrapper">
          <GradingScaleTable
            type="written"
            maxPoints={maxPoints}
            scoredPoints={scoredPoints}
            isErr={isErr}
          />
          <GradingScaleTable
            type="choice"
            maxPoints={maxPoints}
            scoredPoints={scoredPoints}
            isErr={isErr}
          />
          <GradingScaleTable
            type="practice"
            maxPoints={maxPoints}
            scoredPoints={scoredPoints}
            isErr={isErr}
          />
        </div>
      </div>
    </StyledGradeCalculator>
  );
}
