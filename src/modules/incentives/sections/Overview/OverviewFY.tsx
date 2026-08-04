import { Box } from "@mui/material";

import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import PolicyCard from "../../components/PolicyCard";
import { OVERVIEW_DATA } from "../../constants/overview.data";
import DeferredIncentive from "../../components/DeferredIncentive";

const OverviewFY = ({ period }: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <MetricGrid metrics={OVERVIEW_DATA.metrics} period={period} />

      <RevenueProgress data={OVERVIEW_DATA.progress} />

      <DeferredIncentive data={OVERVIEW_DATA.deferred} />

      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewFY;
