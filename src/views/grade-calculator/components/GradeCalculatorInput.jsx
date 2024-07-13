import { StyledGradeCalculatorInput } from "../styles/GradeCalculatorInput.styled";

export default function GradeCalculatorInput({ text, setter, value }) {
  return (
    <StyledGradeCalculatorInput>
      <div className="wrapper">
        <label htmlFor="numInput">{text}</label>
        <input
          type="number"
          value={value}
          id="numInput"
          ref={inputRef}
          onChange={(e) => setter(e.target.value)}
        />
      </div>
    </StyledGradeCalculatorInput>
  );
}
