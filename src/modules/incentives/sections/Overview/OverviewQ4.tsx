import Box from "@mui/material/Box";

import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import PayoutBreakdown from "../../components/PayoutBreakdown";
import PolicyCard from "../../components/PolicyCard";

import {
  Q4_METRICS,
  Q4_REVENUE_PROGRESS,
  Q4_ELIGIBILITY,
  Q4_PAYOUT,
} from "../../constants/q4Overview.data";

import { OVERVIEW_DATA } from "../../constants/overview.data";

const OverviewQ4 = ({ period }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <MetricGrid metrics={Q4_METRICS} period={period} />

      <RevenueProgress data={Q4_REVENUE_PROGRESS} />

      <EligibilityChecklist data={Q4_ELIGIBILITY} />

      <PayoutBreakdown data={Q4_PAYOUT} />

      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ4;
