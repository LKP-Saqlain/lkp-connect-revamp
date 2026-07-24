import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { metricStyles } from "./metric.styles";

import type { MetricCardData } from "../../types/incentive.types";

interface MetricCardProps {
  metric: MetricCardData;
}

const MetricCard = ({ metric }: MetricCardProps) => {
  return (
    <Box sx={metricStyles.card}>
      <Typography sx={metricStyles.title}>{metric.title}</Typography>

      <Typography sx={metricStyles.value}>
        <Box component="span">{metric.value}</Box>

        {metric.meta && (
          <Box component="span" sx={metricStyles.meta}>
            {metric.meta}
          </Box>
        )}
      </Typography>

      {metric.subtitle && (
        <Typography sx={metricStyles.subtitle}>{metric.subtitle}</Typography>
      )}
    </Box>
  );
};

export default MetricCard;
