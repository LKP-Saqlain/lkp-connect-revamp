import { Box, Typography } from "@mui/material";

import RevenueBarChart from "./RevenueBarChart";
import ChartLegend from "./ChartLegend";
import type { RevenueBreakdownData } from "../../types/revenueBreakdown.types";

interface Props {
  chart: RevenueBreakdownData["chart"];
}

const RevenueChart = ({ chart }: Props) => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Header */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 2,
          borderBottom: "1px solid #EAECF0",
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            color: "#101828",
          }}
        >
          Month-wise revenue breakdown
        </Typography>

        <ChartLegend />
      </Box>

      {/* Chart */}

      <Box
        sx={{
          px: 2,
          py: 2,
        }}
      >
        <RevenueBarChart categories={chart.categories} series={chart.series} />
      </Box>
    </Box>
  );
};

export default RevenueChart;
