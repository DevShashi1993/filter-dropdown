import { useEffect, useState } from "react";
import "./index.scss";
import { MdRestartAlt } from "react-icons/md";
import Dropdown from "../DropDown";
import FilterTopBarSection from "../FilterTopBarSection";

type FilterComponentProp = {
  filterData: FilterDropDown[];
};

const FilterComponent: React.FC<FilterComponentProp> = ({ filterData }) => {
  const [allFilterData, setAllFilterData] =
    useState<FilterDropDown[]>(filterData);

  const [showFilterDropDown, setShowFilterDropDown] = useState<boolean>(false);

  const [allSelectedFilterData, setAllSelectedFilterData] = useState<
    SelectedFilter[]
  >([]);

  useEffect(() => {
    let allselectedFilterArr: SelectedFilter[] = [];

    allFilterData?.forEach((eachFilterObj) => {
      const selectedOptions = eachFilterObj.options.filter(
        (optionObj) => optionObj.selected
      );

      if (selectedOptions.length > 0) {
        allselectedFilterArr.push({
          isMultiSelect: eachFilterObj.isMultiSelect,
          title: eachFilterObj.title,
          selectedOptions: selectedOptions,
        });
      }
    });

    setAllSelectedFilterData(allselectedFilterArr);
  }, [allFilterData]);

  const resetHandler = () => {
    const resetSelectedFilterArr: FilterDropDown[] = allFilterData.map(
      (eachFilterObj) => {
        const updatedResetOptionObj = eachFilterObj.options.map((optionObj) => {
          return { ...optionObj, selected: false };
        });
        return { ...eachFilterObj, options: updatedResetOptionObj };
      }
    );

    setAllFilterData(resetSelectedFilterArr);
  };

  const filterToggle = () => {
    setShowFilterDropDown((prevState) => !prevState);
  };

  const onFilterChange = (
    updatedDropdownData: FilterDropDown,
    index: number
  ) => {
    const newFilterData: FilterDropDown[] = allFilterData.slice();
    newFilterData[index] = updatedDropdownData;

    setAllFilterData(newFilterData);
  };

  const removeSelectedFilers = (title: string) => {
    const updatedSelectedFilterArr: FilterDropDown[] = allFilterData.map(
      (eachFilterObj) => {
        const updatedResetOptionObj = eachFilterObj.options.map((optionObj) => {
          if (eachFilterObj.title === title) {
            return { ...optionObj, selected: false };
          }
          return optionObj;
        });
        return { ...eachFilterObj, options: updatedResetOptionObj };
      }
    );

    setAllFilterData(updatedSelectedFilterArr);
  };

  return (
    <div className="container">
      <FilterTopBarSection
        allSelectedFilterData={allSelectedFilterData}
        showFilterDropDown={showFilterDropDown}
        filterToggle={filterToggle}
        removeSelectedFilers={removeSelectedFilers}
      />

      {showFilterDropDown && (
        <div className="filter_data_by_container">
          <div className={"filter_header_section"}>
            <span>Filter data by</span>
            <button className="reset_btn" onClick={resetHandler}>
              <MdRestartAlt fill="#4785FF" size={16} /> <span>Reset</span>
            </button>
          </div>

          <div>
            {allFilterData?.map((data, index) => (
              <Dropdown
                dropdownData={data}
                index={index}
                onFilterChange={onFilterChange}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
