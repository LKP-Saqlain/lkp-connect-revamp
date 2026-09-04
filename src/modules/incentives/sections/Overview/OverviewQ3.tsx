import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CarryForwardBannerTL from "../../components/CarryForwardBanner";
import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import TeamEligibilityChecklist from "../../components/TeamEligibilityChecklist";
import PayoutBreakdown from "../../components/PayoutBreakdown";
import PolicyCard from "../../components/PolicyCard";

import {
  Q3_METRICS,
  Q3_REVENUE_PROGRESS,
  Q3_ELIGIBILITY,
  Q3_PAYOUT,
} from "../../constants/q3Overview.data";

import { OVERVIEW_DATA } from "../../constants/overview.data";

import {
  buildQ3TLCarryForward,
  buildQ3TLSummary,
  buildQ3TLSelfMetrics,
  buildQ3TLSelfCriteria,
  buildQ3TLTeamMetrics,
  buildQ3TLTeamCriteria,
  buildQ3TLEligibility,
  buildQ3TLPayout,
  // Q3_TL_ROLE,
} from "../../constants/q3OverviewTL.data";

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
    <Typography
      sx={{
        fontSize: 13,
        fontWeight: 500,
        color: "#111111",
      }}
    >
      {title}
    </Typography>

    <Typography
      sx={{
        fontSize: 12,
        fontWeight: 400,
        color: "#667085",
      }}
    >
      Minimum performance criteria:{" "}
      <Box
        component="span"
        sx={{
          fontWeight: 700,
          color: "#101828",
        }}
      >
        {actual}
      </Box>{" "}
      / {required}
    </Typography>
  </Box>
);

interface OverviewQ3Props {
  period?: any;
  employeeType?: string;
  employeeIncentive?: any;
}

const OverviewQ3 = ({
  period,
  employeeType,
  employeeIncentive,
}: OverviewQ3Props) => {
  const isTeamRole = employeeType
    ? TEAM_ROLE_TYPES.includes(employeeType)
    : false;

  const employeeData = employeeIncentive?.data;

  // -----------------------------------------
  // TL / BM / AH
  // -----------------------------------------

  if (isTeamRole) {
    const carryForward = buildQ3TLCarryForward(employeeData);
    const q3TLSummary = buildQ3TLSummary(employeeData);
    const q3TLSelfMetrics = buildQ3TLSelfMetrics(employeeData);
    const q3TLSelfCriteria = buildQ3TLSelfCriteria(employeeData);
    const q3TLTeamMetrics = buildQ3TLTeamMetrics(employeeData);
    const q3TLTeamCriteria = buildQ3TLTeamCriteria(employeeData);
    const q3TLEligibility = buildQ3TLEligibility(employeeData);
    const q3TLPayout = buildQ3TLPayout(employeeData);

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 3,
        }}
      >
        <CarryForwardBannerTL
          title={carryForward.title}
          description={carryForward.description}
          q4Minimum={carryForward.q3Minimum}
          q3Shortfall={carryForward.q2Shortfall}
          required={carryForward.required}
        />

        <MetricGrid metrics={q3TLSummary} period={period} />

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q3TLSelfCriteria.title}
            actual={q3TLSelfCriteria.actual}
            required={q3TLSelfCriteria.required}
          />

          <MetricGrid metrics={q3TLSelfMetrics} />
        </Box>

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q3TLTeamCriteria.title}
            actual={q3TLTeamCriteria.actual}
            required={q3TLTeamCriteria.required}
          />

          <MetricGrid metrics={q3TLTeamMetrics} />
        </Box>

        <TeamEligibilityChecklist data={q3TLEligibility} />

        <PayoutBreakdown data={q3TLPayout} />

        <PolicyCard data={OVERVIEW_DATA.policy} />

        {/* Or Q3_TL_ROLE if this is required on Q3 */}
        {/* <TeamRoleCard data={Q3_TL_ROLE} /> */}
      </Box>
    );
  }

  // -----------------------------------------
  // RM / BDM / Dealer
  // -----------------------------------------

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <MetricGrid metrics={Q3_METRICS} period={period} />

      <RevenueProgress data={Q3_REVENUE_PROGRESS} />

      <EligibilityChecklist data={Q3_ELIGIBILITY} />

      <PayoutBreakdown data={Q3_PAYOUT} />

      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ3;
