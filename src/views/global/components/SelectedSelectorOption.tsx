import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { StyledSelectorOption } from "../styles/Selector.styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  setAreOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  areOptionsVisible: boolean;
  direction: "down" | "up";
  selectedValue: string;
  icon?: IconProp;
};

export default function SelectedSelectorOption({
  setAreOptionsVisible,
  areOptionsVisible,
  direction,
  selectedValue,
  icon,
}: Props) {
  const toggleOptionsVisibility = () => {
    setAreOptionsVisible((prev) => !prev);
  };

  return (
    <StyledSelectorOption>
      <button
        onClick={() => {
          toggleOptionsVisibility();
        }}
        className={`selected ${direction} selectorButton`}
      >
        <div className="flex-center">
          {icon && <FontAwesomeIcon icon={icon} className="selectorIcon" />}
          <p>{selectedValue}</p>
        </div>
        {direction === "down" ? (
          <FontAwesomeIcon
            icon={areOptionsVisible ? faChevronUp : faChevronDown}
            className="icon"
          />
        ) : (
          <FontAwesomeIcon
            icon={areOptionsVisible ? faChevronDown : faChevronUp}
            className="icon"
          />
        )}
      </button>
    </StyledSelectorOption>
  );
}
