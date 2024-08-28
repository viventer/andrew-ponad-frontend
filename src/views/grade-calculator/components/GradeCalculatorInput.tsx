import { StyledGradeCalculatorInput } from "../styles/GradeCalculatorInput.styled";

type Props = {
  text: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  inputRef: React.MutableRefObject<HTMLInputElement>;
  isValid: boolean;
  type: "scoredPointsInput" | "maxPointsInput";
};

export default function GradeCalculatorInput({
  text,
  setter,
  value,
  inputRef,
  isValid,
  type,
}: Props) {
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
          maxLength={7}
        />
      </div>
    </StyledGradeCalculatorInput>
  );
}
