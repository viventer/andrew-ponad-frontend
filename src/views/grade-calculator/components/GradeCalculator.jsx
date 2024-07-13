import { useState } from "react";
import { StyledGradeCalculator } from "../styles/GradeCalculator.styled";
import GradeCalculatorInput from "./GradeCalculatorInput";
import GradingScaleTable from "./GradingScaleTable";
import { setErrMsg } from "../../global/slices/globalStatesSlice";
import { useDispatch } from "react-redux";

export default function GradeCalculator() {
  const [scoredPoints, setScoredPoints] = useState(null);
  const [maxPoints, setMaxPoints] = useState(null);

  const dispatch = useDispatch();

  const handleSetScoredPoints = (points) => {
    const validationResult = validateScoredPoints(points);
    if (validationResult.isValid) {
      setScoredPoints(points);
    } else {
      dispatch(setErrMsg(validationResult.errorMessage));
    }
  };
  const validateScoredPoints = (points) => {
    const validationResult = { isValid: true, errorMesage: "" };

    if (points > maxPoints && maxPoints) {
      validationResult.isValid = false;
      validationResult.errorMesage =
        "Liczba uzyskanych punktów nie może być większa od maksymalnej.";
    } else if (points < 0) {
      validationResult.isValid = false;
      validationResult.errorMesage =
        "Liczba uzyskanych punktów nie może być mniejsza od 0.";
    } else if (points > 9999) {
      validationResult.isValid = false;
      validationResult.errorMesage =
        "Liczba uzyskanych punktów nie może być większa niż 9999.";
    }
  };

  const handleSetMaxPoints = (points) => {};
  const validateMaxPoints = (points) => {};

  return (
    <StyledGradeCalculator>
      <div className="inputsWrapper">
        <GradeCalculatorInput
          text="Liczba zdobytych punktów"
          setter={handleSetScoredPoints}
          value={scoredPoints}
        />
        <GradeCalculatorInput
          text="Maksymalna liczba punktów"
          setter={handleSetMaxPoints}
          value={maxPoints}
        />
      </div>
      <div className="tablesWrapper">
        <GradingScaleTable type="writtenTest" />
        <GradingScaleTable type="choiceTest" />
        <GradingScaleTable type="pracitceTest" />
      </div>
    </StyledGradeCalculator>
  );
}
