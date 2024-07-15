import { StyledGradeCalculatorInput } from "../styles/GradeCalculatorInput.styled";

export default function GradeCalculatorInput({
  text,
  setter,
  value,
  inputRef,
  isValid,
  errMsg,
  type,
}) {
  return (
    <StyledGradeCalculatorInput>
      <div className={`wrapper ${isValid ? "valid" : ""}`}>
        <label htmlFor={type}>{text}</label>
        <input
          type="text"
          value={value}
          id={type}
          ref={inputRef}
          onChange={(e) => setter(e.target.value)}
        />
      </div>
      {!isValid && <p>{errMsg}</p>}
    </StyledGradeCalculatorInput>
  );
}
