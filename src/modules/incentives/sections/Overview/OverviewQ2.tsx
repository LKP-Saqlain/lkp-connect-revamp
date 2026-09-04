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
import TeamEligibilityChecklist from "../../components/TeamEligibilityChecklist";
import TeamRoleCard from "../../components/TeamRoleCard/TeamRoleCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type {
  EligibilityChecklistData,
  EmployeeIncentiveData,
  RevenueProgressData,
} from "../../types/incentive.types";
import { useEffect } from "react";
import { fetchIncentiveSlabs } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

import {
  buildTLSummary,
  buildTLSelfMetrics,
  buildTLSelfCriteria,
  buildTLTeamMetrics,
  buildTLTeamCriteria,
  buildTLEligibility,
  Q2_TL_ROLE,
  buildTLPayout,
} from "../../constants/q2OverviewTL.data";
import PayoutBreakdown from "../../components/PayoutBreakdown";

export interface EmployeeIncentiveResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: EmployeeIncentiveData;
  message: string;
}

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

// Local to this file only — matches SectionHeader used in OverviewQ1.tsx
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
    <Box sx={{ fontSize: 13, fontWeight: 500, color: "#111111" }}>{title}</Box>
    <Box sx={{ fontSize: 12, fontWeight: 400, color: "#667085" }}>
      Minimum performance criteria:{" "}
      <Box component="span" sx={{ fontWeight: 700, color: "#101828" }}>
        {actual}
      </Box>{" "}
      / {required}
    </Box>
  </Box>
);

interface OverviewQ2Props {
  employeeType?: string;
  period?: string;
  empCode?: string;
}

const OverviewQ2 = ({ employeeType, period, empCode }: OverviewQ2Props) => {
  const isTeamRole = employeeType
    ? TEAM_ROLE_TYPES.includes(employeeType)
    : false;

  const dispatch = useAppDispatch();

  const { employeeIncentive, incentiveSlabs } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  const employeeData = employeeIncentive?.data;

  useEffect(() => {
    console.log("employeeIncentive123123", employeeIncentive);
  }, [employeeIncentive]);

  useEffect(() => {
    if (!employeeData?.empCode || isTeamRole) return;

    dispatch(
      fetchIncentiveSlabs({
        empCode: employeeData?.empCode ? employeeData?.empCode : empCode,
        financialYear: "2026-27",
      }),
    );
  }, [dispatch, employeeData?.empCode, isTeamRole]);

  if (isTeamRole) {
    const q2TLSummary = buildTLSummary(employeeData);
    const q2TLSelfMetrics = buildTLSelfMetrics(employeeData);
    const q2TLSelfCriteria = buildTLSelfCriteria(employeeData);
    const q2TLTeamMetrics = buildTLTeamMetrics(employeeData);
    const q2TLTeamCriteria = buildTLTeamCriteria(employeeData);
    const q2TLEligibility = buildTLEligibility(employeeData);
    const q2TLPayout = buildTLPayout(employeeData);

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
        <MetricGrid metrics={q2TLSummary} period="q2" />

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q2TLSelfCriteria.title}
            actual={q2TLSelfCriteria.actual}
            required={q2TLSelfCriteria.required}
          />
          <MetricGrid metrics={q2TLSelfMetrics} />
        </Box>

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q2TLTeamCriteria.title}
            actual={q2TLTeamCriteria.actual}
            required={q2TLTeamCriteria.required}
          />
          <MetricGrid metrics={q2TLTeamMetrics} />
        </Box>

        <TeamEligibilityChecklist data={q2TLEligibility} />
        <PayoutBreakdown data={q2TLPayout} />
        <TeamRoleCard data={Q2_TL_ROLE} />
      </Box>
    );
  }

  const q2Slabs = incentiveSlabs?.data?.map((slab: any, index: any) => ({
    id: String(index + 1),

    range:
      slab.toMultiple === 999
        ? `${slab.fromMultiple}x & above`
        : `${slab.fromMultiple}x – ${slab.toMultiple}x`,

    text: `Broking ${slab.brokingPercentage}% · Non-broking ${slab.nonBrokingPercentage}%`,

    disabled: slab.toMultiple === 999,
  }));

  const q2RevenueProgress: RevenueProgressData = {
    ...Q2_REVENUE_PROGRESS,

    multiplier:
      employeeData?.revenueMultiple != null
        ? `${employeeData.revenueMultiple}x`
        : Q2_REVENUE_PROGRESS.multiplier,

    mpc:
      employeeData?.reqRevenueMultiple != null
        ? `${employeeData.reqRevenueMultiple}x`
        : Q2_REVENUE_PROGRESS.mpc,

    barMax: employeeData?.reqRevenueMultiple ?? Q2_REVENUE_PROGRESS.barMax,

    progressPercent:
      employeeData?.revenueMultiple != null && employeeData?.reqRevenueMultiple
        ? Math.min(
            (employeeData.revenueMultiple / employeeData.reqRevenueMultiple) *
              100,
            100,
          )
        : Q2_REVENUE_PROGRESS.progressPercent,

    target: {
      label:
        employeeData?.reqRevenueMultiple != null
          ? `${employeeData.reqRevenueMultiple}x CTC`
          : Q2_REVENUE_PROGRESS.target.label,

      value:
        employeeData?.empQuarterCTC != null &&
        employeeData?.reqRevenueMultiple != null
          ? `₹${(
              employeeData.empQuarterCTC * employeeData.reqRevenueMultiple
            ).toLocaleString("en-IN")}`
          : Q2_REVENUE_PROGRESS.target.value,
    },

    broking: {
      ...Q2_REVENUE_PROGRESS.broking,

      label: `Broking credit (${employeeData?.brokingPercent}%)`,

      amount:
        employeeData?.brokingCredits != null
          ? `₹${employeeData.brokingCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          : Q2_REVENUE_PROGRESS.broking.amount,

      percent:
        employeeData?.brokingPercent != null
          ? `${(
              (employeeData.brokingCredits / employeeData?.empCTC) *
              100
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}%`
          : Q2_REVENUE_PROGRESS.broking.percent,
    },

    nonBroking: {
      ...Q2_REVENUE_PROGRESS.nonBroking,

      label: `Non-Broking credit (${employeeData?.nonBrokingPercent}%)`,

      amount:
        employeeData?.nonBrokingCredits != null
          ? `₹${employeeData.nonBrokingCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          : Q2_REVENUE_PROGRESS.nonBroking.amount,

      percent:
        employeeData?.nonBrokingPercent != null
          ? `${(
              (employeeData.nonBrokingCredits / employeeData?.empCTC) *
              100
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}%`
          : Q2_REVENUE_PROGRESS.nonBroking.percent,
    },

    netCredit: {
      ...Q2_REVENUE_PROGRESS.netCredit,

      label: "Net credit",

      amount:
        employeeData?.brokingCredits != null &&
        employeeData?.nonBrokingCredits != null
          ? `₹${(
              employeeData.brokingCredits + employeeData.nonBrokingCredits
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          : Q2_REVENUE_PROGRESS.netCredit.amount,

      percent:
        employeeData?.brokingCredits != null &&
        employeeData?.nonBrokingCredits != null &&
        employeeData?.empCTC
          ? `${(
              (employeeData.brokingCredits / employeeData.empCTC) * 100 +
              (employeeData.nonBrokingCredits / employeeData.empCTC) * 100
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}%`
          : Q2_REVENUE_PROGRESS.netCredit.percent,
    },

    slabLabel:
      employeeData?.revenueMultiple != null &&
      employeeData?.reqRevenueMultiple != null
        ? employeeData.revenueMultiple >= employeeData.reqRevenueMultiple
          ? "Eligible"
          : "Below minimum"
        : Q2_REVENUE_PROGRESS.slabLabel,

    slabs: q2Slabs && q2Slabs.length > 0 ? q2Slabs : Q2_REVENUE_PROGRESS.slabs,
  };

  const q2Metrics = Q2_METRICS.map((metric) => {
    switch (metric.id) {
      case "revenue-multiple":
        return {
          ...metric,
          value:
            employeeData?.brokRevMultiple != null
              ? `${employeeData.brokRevMultiple}x`
              : metric.value,
        };

      case "broking-credit":
        return {
          ...metric,
          value:
            employeeData?.brokingCredits != null
              ? `₹${employeeData.brokingCredits.toLocaleString("en-IN")}`
              : metric.value,

          subtitle:
            employeeData?.brokingPercent != null &&
            employeeData?.totalBrokingRevenue != null
              ? `${employeeData.brokingPercent}% of ₹${employeeData.totalBrokingRevenue.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2,
                  },
                )}`
              : metric.subtitle,
        };

      case "non-broking-credit":
        return {
          ...metric,
          value:
            employeeData?.nonBrokingCredits != null
              ? `₹${employeeData.nonBrokingCredits.toLocaleString("en-IN")}`
              : metric.value,

          subtitle:
            employeeData?.nonBrokingPercent != null &&
            employeeData?.totalNonBrokingRevenue != null
              ? `${employeeData.nonBrokingPercent}% of ₹${employeeData.totalNonBrokingRevenue.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2,
                  },
                )}`
              : metric.subtitle,
        };

      case "estimated-incentive":
        return {
          ...metric,
          value:
            employeeData?.finalIncentive != null
              ? `₹${employeeData.finalIncentive.toLocaleString("en-IN")}`
              : metric.value,
        };

      default:
        return metric;
    }
  });

  const q2Eligibility: EligibilityChecklistData = {
    ...Q2_ELIGIBILITY,
    qualifications: [
      {
        title: "Min Revenue",
        actual:
          employeeData?.totalRevenue != null
            ? `${employeeData.revenueMultiple}x (₹${employeeData.totalRevenue.toLocaleString("en-IN")})`
            : Q2_ELIGIBILITY.qualifications[0].actual,
        required: Q2_ELIGIBILITY.qualifications[0].required,
        status:
          employeeData?.revenueMultiple != null
            ? employeeData.revenueMultiple >= 3
              ? "completed"
              : "failed"
            : Q2_ELIGIBILITY.qualifications[0].status,
      },
      {
        title: "Non-broking revenue",
        actual:
          employeeData != null
            ? `${employeeData.nonBrokRevMultiple}x`
            : Q2_ELIGIBILITY.qualifications[1].actual,
        required: Q2_ELIGIBILITY.qualifications[1].required,
        status:
          employeeData?.nonBrokRevMultiple != null
            ? employeeData.nonBrokRevMultiple >= 1
              ? "completed"
              : "failed"
            : Q2_ELIGIBILITY.qualifications[1].status,
      },
    ],

    accounts: [
      {
        label: "New accounts opened",
        required: `${employeeData?.requiredAccounts ?? 0} accounts`,
        actual: `${employeeData?.totalNewAccounts ?? 0} accounts`,
        eligible: employeeData?.accountStatus ?? false,
      },
      {
        label: "Accounts fulfilling all criteria",
        required: `${employeeData?.requiredAccounts ?? 0} accounts`,
        actual: `${employeeData?.actualMarginCount ?? 0} accounts`,
        eligible: employeeData?.marginStatus ?? false,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <AlertBanner title={Q2_ALERT.title} description={Q2_ALERT.description} />
      <MetricGrid metrics={q2Metrics} period="q2" />
      <RevenueProgress data={q2RevenueProgress} />
      <EligibilityChecklist data={q2Eligibility} />
      <NoIncentiveCard data={Q2_NO_INCENTIVE} />
      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ2;
