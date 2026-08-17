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
      <Typography
        sx={{
          ...metricStyles.title,
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Box
          component="img"
          src={metric.icon}
          alt="title-icon"
          sx={{ width: 18, height: 18 }}
        />
        {metric.title}
      </Typography>

      <Typography sx={metricStyles.value}>
        <Typography
          sx={{
            ...metricStyles.value,
            ...(metric.title === "Revenue multiple" && {
              color: "#185FA5",
            }),
            ...(metric.color && {
              color: metric.color,
            }),
          }}
        >
          {metric.value}
        </Typography>
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
