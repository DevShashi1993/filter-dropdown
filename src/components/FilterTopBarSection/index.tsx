import React from "react";
import "./index.scss";
import { IoFilter } from "react-icons/io5";
import SelectedFilterPill from "../SelectedFilterPill";

type FilterTopBarSectionProps = {
  allSelectedFilterData: SelectedFilter[];
  showFilterDropDown: boolean;
  filterToggle: () => void;
  removeSelectedFilers: (title: string) => void;
};

const FilterTopBarSection: React.FC<FilterTopBarSectionProps> = ({
  allSelectedFilterData,
  showFilterDropDown,
  filterToggle,
  removeSelectedFilers,
}) => {
  return (
    <div className="filter_top_nav">
      <div>
        <button
          onClick={filterToggle}
          className={`filter_btn ${showFilterDropDown ? "active" : ""}`}
        >
          <IoFilter
            fill={showFilterDropDown ? "#ffffff" : "#1967FF"}
            size={18}
          />{" "}
          <span>Filter</span>
        </button>
      </div>

      <div className="selected_filter">
        {allSelectedFilterData?.map((selectedFilterData) => (
          <SelectedFilterPill
            selectedFilterData={selectedFilterData}
            removeSelectedFilers={removeSelectedFilers}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterTopBarSection;
