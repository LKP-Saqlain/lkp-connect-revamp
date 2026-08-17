import { Box } from "@mui/material";
import { useEffect } from "react";
import SummaryCard from "./components/SummaryCards/SummaryCards";
import RevenueBreakdownCard from "./components/RevenueBreakdownCard/RevenueBreakdownCard";
import RevenueChart from "./components/RevenueChart/RevenueChart";
import type { RevenueBreakdownData } from "./types/revenueBreakdown.types";

interface Props {
  summary: RevenueBreakdownData["summary"];
  table: RevenueBreakdownData["table"];
  chart: RevenueBreakdownData["chart"];
}
const RevenueBreakdownLayout = ({ summary, table, chart }: Props) => {
  useEffect(() => {
    console.log("====================================");
    console.log(summary, table, chart);
    console.log("====================================");
  }, [summary, table, chart]);

  return (
    <Box
      sx={{
        mt: 1,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <SummaryCard summary={summary} />
      <RevenueBreakdownCard table={table} />
      <RevenueChart chart={chart} />
    </Box>
  );
};

export default RevenueBreakdownLayout;
