const chartDummyData = [
  {
    chartType: "BarChart",
    title: "Population of Largest U.S. Cities",
    data: [
      ["City", "2010 Population", "2000 Population"],
      ["New York City, NY", 8175000, 8008000],
      ["Los Angeles, CA", 3792000, 3694000],
      ["Chicago, IL", 2695000, 2896000],
      ["Houston, TX", 2099000, 1953000],
      ["Philadelphia, PA", 1526000, 1517000],
    ],
  },
  {
    chartType: "PieChart",
    title: "Daily Activities",
    data: [
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ],
  },
];

const numbersDummyData = [
  {
    title1: "Cumulative Action Items - Personal",
    data1: [0, 0],
    title2: "Cumulative Action Items - Default Group",
    data2: [147, 147],
  },
];

// delete everything above once we have real data

export const dashboardTypes = {
  chart: "chart",
  numbers: "numbers",
};

export const dashboardDummyData = [
  {
    type: dashboardTypes.chart,
    data: chartDummyData[0],
  },
  {
    type: dashboardTypes.numbers,
    data: numbersDummyData[0],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[1],
  },
];

export const colors = {
  white: "#ffffff",
  black: "#2e3035",
  // 2e3035
  red: "#ff0000",
  gray: "#393c45",
  pink: "#f29fbd",
  blue: "#88b1f1",
};
