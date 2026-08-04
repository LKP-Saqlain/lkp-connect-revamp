import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Box, Typography } from "@mui/material";

import {
  MONTHLY_REVENUE,
  REVENUE_CHART,
} from "../../../../constants/annualTarget.data";

import ChartLegend from "./ChartLegend";
import { revenueChartStyles as styles } from "./revenueChart.styles";

const RevenueChart = () => {
  const series = [
    {
      name: "Broking",
      data: MONTHLY_REVENUE.map((item) => item.broking),
    },
    {
      name: "Non-broking",
      data: MONTHLY_REVENUE.map((item) => item.nonBroking),
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: "Lato, sans-serif",
    },

    colors: ["#2F80ED", "#21B573"],

    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        borderRadiusApplication: "end",
        columnWidth: "48%",
        dataLabels: {
          position: "top",
        },
      },
    },

    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: true,

      offsetY: -18,

      style: {
        fontSize: "11px",
        fontWeight: "600",
        colors: ["#475467"],
      },

      formatter(_, opts) {
        const total = MONTHLY_REVENUE[opts.dataPointIndex].total;

        return `₹${(total / 100000).toFixed(1)}L`;
      },
    },

    legend: {
      show: false,
    },

    xaxis: {
      categories: MONTHLY_REVENUE.map((item) => item.month),

      labels: {
        style: {
          colors: "#667085",
          fontSize: "12px",
        },
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },

    grid: {
      borderColor: "#EAECF0",
      strokeDashArray: 4,
      padding: {
        left: 0,
        right: 0,
      },
    },

    tooltip: {
      y: {
        formatter(value) {
          return `₹${value.toLocaleString("en-IN")}`;
        },
      },
    },
  };

  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>{REVENUE_CHART.title}</Typography>

        <ChartLegend items={REVENUE_CHART.legend} />
      </Box>

      <Box sx={styles.chartWrapper}>
        <Chart options={options} series={series} type="bar" height={420} />
      </Box>
    </Box>
  );
};

export default RevenueChart;
