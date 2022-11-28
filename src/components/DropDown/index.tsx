import { useRef, useState, BaseSyntheticEvent } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import "./index.scss";
import DropDownListItem from "../DropDownListItem";

type DropdownProp = {
  dropdownData: FilterDropDown;
  index: number;
  onFilterChange: (updatedDropdownData: FilterDropDown, index: number) => void;
};

const Dropdown: React.FC<DropdownProp> = ({
  dropdownData,
  index,
  onFilterChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);

  const { isMultiSelect, title, options } = dropdownData;

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const onMultiSelectChangeHandler = (e: BaseSyntheticEvent) => {
    const selectedValue = e.target.value;
    const newOption = [...options];
    const selectedOptionIndex = options.findIndex(
      (o) => o.value === selectedValue
    );

    const selectedOption = options[selectedOptionIndex];

    const updatedSelectedOption = {
      ...selectedOption,
      selected: !selectedOption.selected,
    };

    newOption[selectedOptionIndex] = updatedSelectedOption;

    const newDropDownData = {
      ...dropdownData,
      options: newOption,
    };
    onFilterChange(newDropDownData, index);
  };

  const onSingleSelectChangeHandler = (e: BaseSyntheticEvent) => {
    const selectedValue = e.target.value;
    const selectedOptionIndex = options.findIndex(
      (o) => o.value === selectedValue
    );

    const newOption = options.map((optionObj, index) => {
      return { ...optionObj, selected: index === selectedOptionIndex };
    });

    const newDropDownData = {
      ...dropdownData,
      options: newOption,
    };
    onFilterChange(newDropDownData, index);
  };

  const dropdownContentWrapperStyle = isExpanded
    ? { height: contentEl.current?.scrollHeight }
    : { height: "0px" };

  return (
    <>
      <div className={`dropdown ${isExpanded ? "active" : ""}`}>
        <button className="dropdown_title" onClick={handleToggle}>
          {title}
          <span className="expand_icon">
            {isExpanded ? (
              <HiChevronUp fill="#2F80ED" />
            ) : (
              <HiChevronDown fill="#2F80ED" />
            )}
          </span>
        </button>

        <div
          ref={contentEl}
          className="dropdown_content_wrapper"
          style={dropdownContentWrapperStyle}
        >
          <div className="dropwdown_option">
            <ul className="dropwdown_option_list">
              {options?.map((optionsData) => (
                <DropDownListItem
                  isMultiSelect={isMultiSelect}
                  optionsData={optionsData}
                  onChangeHandler={
                    isMultiSelect
                      ? onMultiSelectChangeHandler
                      : onSingleSelectChangeHandler
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
