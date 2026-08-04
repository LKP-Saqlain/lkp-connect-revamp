import { Box } from "@mui/material";
import AlertBanner from "../../components/AlertBanner";
import {
  Q2_ALERT,
  Q2_ELIGIBILITY,
  Q2_METRICS,
  Q2_NO_INCENTIVE,
  Q2_REVENUE_PROGRESS,
} from "../../constants/q2Overview.data";
import PolicyCard from "../../components/PolicyCard";
import { OVERVIEW_DATA } from "../../constants/overview.data";
import RevenueProgress from "../../components/RevenueProgress";
import MetricGrid from "../../components/MetricCard";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import NoIncentiveCard from "../../components/NoIncentiveCard";

const OverviewQ2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <AlertBanner title={Q2_ALERT.title} description={Q2_ALERT.description} />
      <MetricGrid metrics={Q2_METRICS} />
      <RevenueProgress data={Q2_REVENUE_PROGRESS} />
      <EligibilityChecklist data={Q2_ELIGIBILITY} />
      <NoIncentiveCard data={Q2_NO_INCENTIVE} />
      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ2;
