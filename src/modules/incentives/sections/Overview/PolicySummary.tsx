import { Box } from "@mui/material";

import PolicyMetricCard from "../../components/PolicyMetricCard";
import { POLICY_METRICS } from "../../constants/policyTabs.data";

import PolicyLayout from "./PolicySummary/PolicyLayout";

const PolicySummary = () => {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Metric Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        {POLICY_METRICS.map((item) => (
          <PolicyMetricCard
            key={item.title}
            title={item.title}
            value={item.value}
            helper={item.helper}
            color={item.color}
          />
        ))}
      </Box>

      {/* Full Width Layout */}
      <PolicyLayout />
    </Box>
  );
};

export default PolicySummary;
