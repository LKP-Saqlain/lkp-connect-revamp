import Box from "@mui/material/Box";

import MetricCard from "./MetricCard";
import { metricStyles } from "./metric.styles";

import type { MetricCardData } from "../../types/incentive.types";

interface MetricGridProps {
  metrics: MetricCardData[];
}

const MetricGrid = ({ metrics }: MetricGridProps) => {
  return (
    <Box sx={metricStyles.grid}>
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </Box>
  );
};

export default MetricGrid;
