import { Box } from "@mui/material";

import TargetMetricCard from "./TargetMetricCard";
import AnnualTargetLayout from "./AnnualTargetLayout";

import { TARGET_METRICS } from "@/modules/incentives/constants/annualTarget.data";

const AnnualTarget = () => {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Top Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3,1fr)",
          },
          gap: 2,
        }}
      >
        {TARGET_METRICS.map((item) => (
          <TargetMetricCard
            key={item.id}
            title={item.title}
            target={item.target}
            achieved={item.achieved}
            progress={item.progress}
            color={item.color}
          />
        ))}
      </Box>

      {/* Revenue Chart */}
      <AnnualTargetLayout />
    </Box>
  );
};

export default AnnualTarget;
