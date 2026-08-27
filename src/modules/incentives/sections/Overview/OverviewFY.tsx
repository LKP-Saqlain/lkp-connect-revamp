import { Box } from "@mui/material";

import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import PolicyCard from "../../components/PolicyCard";
import DeferredIncentive from "../../components/DeferredIncentive";

import { OVERVIEW_DATA } from "../../constants/overview.data";
import {
  SELF_PERFORMANCE_METRICS,
  TEAM_PERFORMANCE_METRICS,
  SELF_PERFORMANCE_CRITERIA,
  TEAM_PERFORMANCE_CRITERIA,
  OVERVIEW_TL_DEFERRED,
} from "../../constants/overviewTL.data";
import SectionHeader from "../../components/SectionHeader";

const TEAM_ROLE_TYPES = ["TL", "BM", "AH"];

const OverviewFY = ({ period, employeeType }: any) => {
  const isTeamRole = TEAM_ROLE_TYPES.includes(employeeType);

  if (isTeamRole) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            p: 2,
          }}
        >
          <SectionHeader
            title={SELF_PERFORMANCE_CRITERIA.title}
            actual={SELF_PERFORMANCE_CRITERIA.actual}
            required={SELF_PERFORMANCE_CRITERIA.required}
          />
          <MetricGrid metrics={SELF_PERFORMANCE_METRICS} period={period} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            p: 2,
          }}
        >
          <SectionHeader
            title={TEAM_PERFORMANCE_CRITERIA.title}
            actual={TEAM_PERFORMANCE_CRITERIA.actual}
            required={TEAM_PERFORMANCE_CRITERIA.required}
          />
          <MetricGrid metrics={TEAM_PERFORMANCE_METRICS} period={period} />
        </Box>

        <DeferredIncentive data={OVERVIEW_TL_DEFERRED} centerAmount />
      </Box>
    );
  }

  // default: RM / BDM / Dealer
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
