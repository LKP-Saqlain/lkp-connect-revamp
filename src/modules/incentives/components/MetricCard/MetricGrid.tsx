import Box from "@mui/material/Box";

import MetricCard from "./MetricCard";
import { metricStyles } from "./metric.styles";

import type { MetricCardData } from "../../types/incentive.types";

interface MetricGridProps {
  metrics: MetricCardData[];
  period?: any;
}

const MetricGrid = ({ metrics, period }: MetricGridProps) => {
  return (
    <Box
      sx={{
        ...metricStyles.grid,
        mt: period === "q1" || period === "fy" || period === "q4" ? 3 : 0,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: `repeat(${metrics.length},1fr)`,
        },
        gap: 2,
      }}
    >
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </Box>
  );
};

export default MetricGrid;
