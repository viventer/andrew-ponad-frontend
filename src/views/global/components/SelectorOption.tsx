import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledSelectorOption } from "../styles/Selector.styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  value: string;
  areOptionsVisible: boolean;
  setAreOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: (value: string) => void;
  icon?: IconProp;
};

export default function SelectorOption({
  value,
  areOptionsVisible,
  setAreOptionsVisible,
  setValue,
  icon,
}: Props) {
  const selectOption = () => {
    setValue(value);
    setAreOptionsVisible(false);
  };

  return (
    <StyledSelectorOption
      className={areOptionsVisible ? "" : "hide"}
      data-test="selectorOption"
    >
      <button
        onClick={() => {
          selectOption();
        }}
        className="selectorButton"
      >
        {icon && <FontAwesomeIcon icon={icon} className="selectorIcon" />}
        <p>{value}</p>
      </button>
    </StyledSelectorOption>
  );
}
