const chartDummyData = [
  {
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: "category A",
            y: 10,
          },
          {
            x: "category B",
            y: 18,
          },
          {
            x: "category C",
            y: 13,
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "line",
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "line",
      },
      stroke: {
        curve: "stepline",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "area",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "line",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      markers: {
        size: 0,
      },
    },
    series: [
      {
        name: "series-1",
        type: "area",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        type: "line",
        data: [34, 46, 41, 57, 42, 61, 71, 89],
      },
    ],
  },
  {
    options: {
      chart: {
        stacked: true,
        type: "line",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      markers: {
        size: 0,
      },
    },
    series: [
      {
        name: "series-1",
        type: "area",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        type: "area",
        data: [34, 46, 41, 57, 42, 61, 71, 89],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: "Category A",
            y: 665,
          },
          {
            x: "Category B",
            y: 813,
            fillColor: "#EB8C87",
            strokeColor: "#C23829",
          },
          {
            x: "Category C",
            y: 712,
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        stacked: true,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          distributed: true,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: "Category A",
            y: 6653,
          },
          {
            x: "Category B",
            y: 8133,
            fillColor: "#EB8C87",
            strokeColor: "#C23829",
          },
          {
            x: "Category C",
            y: 7132,
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "boxPlot",
      },
    },
    series: [
      {
        data: [
          {
            x: "category 1",
            y: [40, 51.98, 56.29, 59.59, 63.85],
          },
          {
            x: "category 2",
            y: [43.66, 44.99, 51.35, 52.95, 59.42],
          },
          {
            x: "category n",
            y: [52.76, 57.35, 59.15, 63.03, 67.98],
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "boxPlot",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: "category 1",
            y: [40, 51.98, 56.29, 59.59, 63.85],
          },
          {
            x: "category 2",
            y: [43.66, 44.99, 51.35, 52.95, 59.42],
          },
          {
            x: "category n",
            y: [52.76, 57.35, 59.15, 63.03, 67.98],
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "candlestick",
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02],
          },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91],
          },
          {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612],
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612],
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95],
          },
          {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67],
          },
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16],
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        type: "datetime",
      },
    },
    series: [
      {
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-04").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime(),
            ],
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-18").getTime(),
            ],
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "rangeArea",
      },
      stroke: {
        curve: "monotoneCubic",
      },
      title: {
        text: "Range Area Graph",
      },
      markers: {
        hover: {
          sizeOffset: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            return val + "°C";
          },
        },
      },
    },
    series: [
      {
        name: "New York Temperature",
        data: [
          {
            x: "Jan",
            y: [-2, 4],
          },
          {
            x: "Feb",
            y: [-1, 6],
          },
          {
            x: "Mar",
            y: [3, 10],
          },
          {
            x: "Apr",
            y: [8, 16],
          },
          {
            x: "May",
            y: [13, 22],
          },
          {
            x: "Jun",
            y: [18, 26],
          },
          {
            x: "Jul",
            y: [21, 29],
          },
        ],
      },
    ],
  },
  // {
  //   options: {
  //     chart: {
  //       type: "heatmap",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     colors: ["#008FFB"],
  //     title: {
  //       text: "HeatMap Chart (Single color)",
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Metric1",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //     {
  //       name: "Metric2",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //     {
  //       name: "Metric3",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //     {
  //       name: "Metric4",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //     {
  //       name: "Metric5",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //     {
  //       name: "Metric6",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //     {
  //       name: "Metric7",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //     {
  //       name: "Metric8",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //     {
  //       name: "Metric9",
  //       data: generateData(18, {
  //         min: 0,
  //         max: 90,
  //       }),
  //     },
  //   ],
  // },
  {
    options: {
      chart: {
        type: "treemap",
      },
    },
    series: [
      {
        data: [
          {
            x: "New Delhi",
            y: 218,
          },
          {
            x: "Kolkata",
            y: 149,
          },
          {
            x: "Mumbai",
            y: 184,
          },
          {
            x: "Ahmedabad",
            y: 55,
          },
          {
            x: "Bangaluru",
            y: 84,
          },
          {
            x: "Pune",
            y: 31,
          },
          {
            x: "Chennai",
            y: 70,
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          isFunnel: true,
        },
      },
    },
    series: [
      {
        name: "Funnel Series",
        data: [
          {
            x: "Sourced",
            y: 138,
          },
          {
            x: "Assessed",
            y: 99,
          },
          {
            x: "Technical",
            y: 75,
          },
          {
            x: "Offered",
            y: 30,
          },
        ],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [44, 55, 13, 43, 22],
  },
  {
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [44, 55, 13, 43, 22],
  },
  {
    options: {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            margin: 8,
            fontSize: "16px",
            formatter: function (seriesName, opts) {
              return (
                seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              );
            },
          },
        },
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    series: [76, 67, 61, 90],
  },
  {
    options: {
      chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: "#999",
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
            },
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ["Average Results"],
    },
    series: [76],
  },
  {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "Series 3",
        data: [44, 76, 78, 13, 43, 10],
      },
    ],
    options: {
      chart: {
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: "Radar Chart - Multi Series",
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      yaxis: {
        stepSize: 20,
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
      },
    },
  },
  {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
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
  {
    type: dashboardTypes.chart,
    data: chartDummyData[2],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[3],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[4],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[5],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[6],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[7],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[8],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[9],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[10],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[11],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[12],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[13],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[14],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[15],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[16],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[17],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[18],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[19],
  },
  {
    type: dashboardTypes.chart,
    data: chartDummyData[20],
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
