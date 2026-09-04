import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import TeamEligibilityChecklist from "../../components/TeamEligibilityChecklist";
import PayoutBreakdown from "../../components/PayoutBreakdown";
import PolicyCard from "../../components/PolicyCard";
import TeamRoleCard from "../../components/TeamRoleCard/TeamRoleCard";
import CarryForwardBannerTL from "../../components/CarryForwardBanner";

import {
  Q4_METRICS,
  Q4_REVENUE_PROGRESS,
  Q4_ELIGIBILITY,
  Q4_PAYOUT,
} from "../../constants/q4Overview.data";
import { OVERVIEW_DATA } from "../../constants/overview.data";

import {
  buildQ4TLCarryForward,
  buildQ4TLSummary,
  buildQ4TLSelfMetrics,
  buildQ4TLSelfCriteria,
  buildQ4TLTeamMetrics,
  buildQ4TLTeamCriteria,
  buildQ4TLEligibility,
  buildQ4TLPayout,
  Q4_TL_ROLE,
} from "../../constants/q4OverviewTL.data";

const TEAM_ROLE_TYPES = ["TL", "BM", "AH"];

const performanceCardSx = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  p: 2,
} as const;

// Local to this file only — matches SectionHeader used in OverviewQ1/Q2
const SectionHeader = ({
  title,
  actual,
  required,
}: {
  title: string;
  actual: string;
  required: string;
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#111111" }}>
      {title}
    </Typography>
    <Typography sx={{ fontSize: 12, fontWeight: 400, color: "#667085" }}>
      Minimum performance criteria:{" "}
      <Box component="span" sx={{ fontWeight: 700, color: "#101828" }}>
        {actual}
      </Box>{" "}
      / {required}
    </Typography>
  </Box>
);

interface OverviewQ4Props {
  period?: any;
  employeeType?: string;
  employeeIncentive?: any;
}

const OverviewQ4 = ({
  period,
  employeeType,
  employeeIncentive,
}: OverviewQ4Props) => {
  const isTeamRole = employeeType
    ? TEAM_ROLE_TYPES.includes(employeeType)
    : false;
  const employeeData = employeeIncentive?.data;

  if (isTeamRole) {
    const carryForward = buildQ4TLCarryForward(employeeData);
    const q4TLSummary = buildQ4TLSummary(employeeData);
    const q4TLSelfMetrics = buildQ4TLSelfMetrics(employeeData);
    const q4TLSelfCriteria = buildQ4TLSelfCriteria(employeeData);
    const q4TLTeamMetrics = buildQ4TLTeamMetrics(employeeData);
    const q4TLTeamCriteria = buildQ4TLTeamCriteria(employeeData);
    const q4TLEligibility = buildQ4TLEligibility(employeeData);
    const q4TLPayout = buildQ4TLPayout(employeeData);

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
        <CarryForwardBannerTL
          title={carryForward.title}
          description={carryForward.description}
          q4Minimum={carryForward.q4Minimum}
          q3Shortfall={carryForward.q3Shortfall}
          required={carryForward.required}
        />

        <MetricGrid metrics={q4TLSummary} period={period} />

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q4TLSelfCriteria.title}
            actual={q4TLSelfCriteria.actual}
            required={q4TLSelfCriteria.required}
          />
          <MetricGrid metrics={q4TLSelfMetrics} />
        </Box>

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q4TLTeamCriteria.title}
            actual={q4TLTeamCriteria.actual}
            required={q4TLTeamCriteria.required}
          />
          <MetricGrid metrics={q4TLTeamMetrics} />
        </Box>

        <TeamEligibilityChecklist data={q4TLEligibility} />

        <PayoutBreakdown data={q4TLPayout} />

        <TeamRoleCard data={Q4_TL_ROLE} />
      </Box>
    );
  }

  // ---- everything below is your existing RM / BDM / Dealer code, unchanged ----
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <MetricGrid metrics={Q4_METRICS} period={period} />
      <RevenueProgress data={Q4_REVENUE_PROGRESS} />
      <EligibilityChecklist data={Q4_ELIGIBILITY} />
      <PayoutBreakdown data={Q4_PAYOUT} />
      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ4;
