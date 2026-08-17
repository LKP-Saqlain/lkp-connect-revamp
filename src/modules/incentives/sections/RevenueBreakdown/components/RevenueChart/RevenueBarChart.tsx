import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

interface RevenueSeries {
  name: string;
  data: number[];
}

interface Props {
  categories: string[];
  series: RevenueSeries[];
}

const RevenueBarChart = ({ categories, series }: Props) => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
      },
      fontFamily: "Lato",
      parentHeightOffset: 0,
    },

    colors: ["#2F80ED", "#27AE60"],

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "38%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    grid: {
      borderColor: "#EAECF0",
      strokeDashArray: 4,

      xaxis: {
        lines: {
          show: false,
        },
      },

      yaxis: {
        lines: {
          show: true,
        },
      },

      padding: {
        left: 0,
        right: 0,
      },
    },

    xaxis: {
      categories,

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      labels: {
        rotate: 0,

        trim: false,

        style: {
          colors: "#667085",
          fontSize: "12px",
          fontWeight: 500,
        },
      },
    },

    yaxis: {
      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      labels: {
        formatter(value) {
          return `₹${value}L`;
        },

        style: {
          colors: "#667085",
          fontSize: "12px",
          fontWeight: 500,
        },
      },
    },

    stroke: {
      show: false,
    },

    fill: {
      opacity: 1,
    },

    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,

      theme: "light",

      y: {
        formatter: (value: number) => {
          return `₹${value}L`;
        },
      },

      marker: {
        show: true,
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },

      active: {
        filter: {
          type: "none",
        },
      },
    },
  };

  return <Chart options={options} series={series} type="bar" height={340} />;
};

export default RevenueBarChart;
