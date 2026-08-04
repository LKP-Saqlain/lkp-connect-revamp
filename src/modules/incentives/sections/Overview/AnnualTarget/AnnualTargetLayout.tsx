import { Box } from "@mui/material";

import RevenueChart from "./RevenueChart";

const AnnualTargetLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <RevenueChart />
    </Box>
  );
};

export default AnnualTargetLayout;
