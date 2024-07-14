import { StyledGradeCalculatorInput } from "../styles/GradeCalculatorInput.styled";

export default function GradeCalculatorInput({
  text,
  setter,
  value,
  inputRef,
  isValid,
  errMsg,
}) {
  return (
    <StyledGradeCalculatorInput>
      <div className={`wrapper ${isValid ? "valid" : ""}`}>
        <label htmlFor="numInput">{text}</label>
        <input
          type="number"
          value={value}
          id="numInput"
          ref={inputRef}
          onChange={(e) => setter(e.target.value)}
        />
        {!isValid && <p>{errMsg}</p>}
      </div>
    </StyledGradeCalculatorInput>
  );
}
