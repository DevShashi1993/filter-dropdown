import React, { BaseSyntheticEvent } from "react";
import "./index.scss";

type DropdownProp = {
  isMultiSelect: boolean;
  optionsData: FilterDropDownOption;
  onChangeHandler: (e: BaseSyntheticEvent) => void;
};

const DropDownListItem: React.FC<DropdownProp> = ({
  isMultiSelect,
  optionsData,
  onChangeHandler,
}) => {
  const { label, value, selected } = optionsData;
  return (
    <li className="dropwdown_option_list_item">
      <label>
        <input
          type={`${isMultiSelect ? "checkbox" : "radio"}`}
          name={label}
          value={value}
          checked={selected}
          onChange={onChangeHandler}
          className="dropwdown_option_input"
        />
        {label}
      </label>
    </li>
  );
};

export default DropDownListItem;
