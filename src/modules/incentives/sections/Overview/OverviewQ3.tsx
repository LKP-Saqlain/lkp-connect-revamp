import Box from "@mui/material/Box";

import CarryForwardBanner from "../../components/CarryForwardBanner";
import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import PayoutBreakdown from "../../components/PayoutBreakdown";
import PolicyCard from "../../components/PolicyCard";

import {
  Q3_CARRY_FORWARD,
  Q3_METRICS,
  Q3_REVENUE_PROGRESS,
  Q3_ELIGIBILITY,
  Q3_PAYOUT,
} from "../../constants/q3Overview.data";

import { OVERVIEW_DATA } from "../../constants/overview.data";

const OverviewQ3 = ({ period }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <CarryForwardBanner
        title={Q3_CARRY_FORWARD.title}
        description={Q3_CARRY_FORWARD.description}
        summary={Q3_CARRY_FORWARD.summary}
      />

      <MetricGrid metrics={Q3_METRICS} period={period} />

      <RevenueProgress data={Q3_REVENUE_PROGRESS} />

      <EligibilityChecklist data={Q3_ELIGIBILITY} />

      <PayoutBreakdown data={Q3_PAYOUT} />

      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ3;
