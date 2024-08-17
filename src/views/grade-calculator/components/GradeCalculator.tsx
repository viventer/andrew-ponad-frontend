import React, { useEffect, useRef, useState } from "react";

import { StyledGradeCalculator } from "../styles/GradeCalculator.styled";
import GradeCalculatorInput from "./GradeCalculatorInput";
import GradingScaleTable from "./GradingScaleTable";
import DynamicErrorNotification from "../../global/components/DynamicErrorNotification";

export default function GradeCalculator() {
  const [scoredPoints, setScoredPoints] = useState<string>("");
  const [maxPoints, setMaxPoints] = useState<string>("");
  const [isScoredPointsValid, setIsScoredPointsValid] = useState(false);
  const [isMaxPointsValid, setIsMaxPointsValid] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const scoredPointsInputRef = useRef<HTMLInputElement>();
  const maxPointsInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (scoredPointsInputRef.current) {
      scoredPointsInputRef.current.focus();
    }
    setErrMsg("");
  }, []);

  const validateScoredPoints = () => {
    if (scoredPoints && !isFormatCorrect(scoredPoints)) {
      setIsScoredPointsValid(false);
      setErrMsg("Pola mogą zawierać tylko liczby, do separacji używaj kropek.");
      return;
    }

    const scoredPointsNum = parseFloat(scoredPoints!);
    const maxPointsNum = parseFloat(maxPoints!);

    if (!scoredPointsNum && scoredPointsNum != 0) {
      setIsScoredPointsValid(false);
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
    if (maxPoints && !isFormatCorrect(maxPoints)) {
      setIsMaxPointsValid(false);
      setErrMsg("Pola mogą zawierać tylko liczby, do separacji używaj kropek.");
      return;
    }

    const scoredPointsNum = parseFloat(scoredPoints!);
    const maxPointsNum = parseFloat(maxPoints!);

    if (!maxPointsNum && maxPointsNum != 0) {
      setIsMaxPointsValid(false);
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

  const isFormatCorrect = (points: string) => {
    const pointsTrimmed = points?.trim();
    if (!/^\d*\.?\d*$/.test(pointsTrimmed)) {
      return false;
    }
    return true;
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
              inputRef={
                scoredPointsInputRef as React.MutableRefObject<HTMLInputElement>
              }
              isValid={isScoredPointsValid}
              type="scoredPointsInput"
            />
            <GradeCalculatorInput
              text="Maksymalna liczba punktów"
              setter={setMaxPoints}
              value={maxPoints}
              inputRef={
                scoredPointsInputRef as React.MutableRefObject<HTMLInputElement>
              }
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
