import React, { useMemo } from "react";
import "./index.scss";
import { FaTimes } from "react-icons/fa";

type SelectedFilterPillProps = {
  selectedFilterData: SelectedFilter;
  removeSelectedFilers: (title: string) => void;
};

const SelectedFilterPill: React.FC<SelectedFilterPillProps> = ({
  selectedFilterData,
  removeSelectedFilers,
}) => {
  const { isMultiSelect, title, selectedOptions } = selectedFilterData;

  const multiSelectFilterLebels = useMemo(
    () =>
      isMultiSelect &&
      selectedOptions
        .map((option: FilterDropDownOption) => `${option.label}`)
        .join(", "),
    [isMultiSelect, selectedOptions]
  );

  return (
    <div className="pill">
      <button
        className="remove_pill_btn"
        onClick={() => removeSelectedFilers(title)}
      >
        <FaTimes fill="#ffffff" />
      </button>
      {title}:{" "}
      {isMultiSelect ? multiSelectFilterLebels : selectedOptions[0].label}
    </div>
  );
};

export default SelectedFilterPill;
