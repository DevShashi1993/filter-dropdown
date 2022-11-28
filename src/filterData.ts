const filterData = [
  {
    isMultiSelect: true,
    title: "Severity",
    options: [
      {
        label: "Low",
        value: "low",
      },
      {
        label: "Medium",
        value: "medium",
      },
      {
        label: "High",
        value: "high",
      },
    ],
  },
  {
    isMultiSelect: false,
    title: "Time",
    options: [
      {
        label: "Last 24 hours",
        value: "last_24_hrs",
      },
      {
        label: "Last 72 hours",
        value: "last_72_hrs",
      },
      {
        label: "Last week",
        value: "last_week",
      },
      {
        label: "Last 6 months",
        value: "last_6_months",
      },
    ],
  },
  // {
  //   isMultiSelect: true,
  //   title: "Brand",
  //   options: [
  //     {
  //       label: "Nokia",
  //       value: "nokia",
  //       selected: true,
  //     },
  //     {
  //       label: "Samsung",
  //       value: "samsung",
  //     },
  //     {
  //       label: "Apple",
  //       value: "apple",
  //     },
  //   ],
  // },
  // {
  //   isMultiSelect: false,
  //   title: "Gender",
  //   options: [
  //     {
  //       label: "Male",
  //       value: "male",
  //     },
  //     {
  //       label: "Female",
  //       value: "female",
  //     },
  //     {
  //       label: "Other",
  //       value: "other",
  //     },
  //   ],
  // },
];

export default filterData;
