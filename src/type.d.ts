declare type FilterDropDown = {
  isMultiSelect: boolean;
  title: string;
  options: FilterDropDownOption[];
};

declare type SelectedFilter = {
  isMultiSelect: boolean;
  title: string;
  selectedOptions: FilterDropDownOption[];
};

declare type FilterDropDownOption = {
  label: string;
  value: string;
  selected?: boolean;
};
