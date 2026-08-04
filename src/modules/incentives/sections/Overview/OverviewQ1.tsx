import Box from "@mui/material/Box";

import MetricGrid from "../../components/MetricCard";
import {
  Q1_ELIGIBILITY,
  Q1_METRICS,
  Q1_REVENUE_PROGRESS,
  Q1_PAYOUT,
} from "../../constants/q1Overview.data";
import RevenueProgress from "../../components/RevenueProgress";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import PayoutBreakdown from "../../components/PayoutBreakdown";
import PolicyCard from "../../components/PolicyCard";
import { OVERVIEW_DATA } from "../../constants/overview.data";

const OverviewQ1 = ({ period }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <MetricGrid metrics={Q1_METRICS} period={period} />
      <RevenueProgress data={Q1_REVENUE_PROGRESS} />
      <EligibilityChecklist data={Q1_ELIGIBILITY} />
      <PayoutBreakdown data={Q1_PAYOUT} />
      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ1;
