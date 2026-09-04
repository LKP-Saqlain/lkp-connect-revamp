import Box from "@mui/material/Box";

import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import TeamEligibilityChecklist from "../../components/TeamEligibilityChecklist";
import PayoutBreakdown from "../../components/PayoutBreakdown";
import PolicyCard from "../../components/PolicyCard";
import InfoNote from "../../components/InfoNote/InfoNote";
import TeamRoleCard from "../../components/TeamRoleCard/TeamRoleCard";
import SectionHeader from "../../components/SectionHeader";

import {
  Q1_ELIGIBILITY,
  Q1_METRICS,
  Q1_REVENUE_PROGRESS,
  Q1_PAYOUT,
} from "../../constants/q1Overview.data";
import { OVERVIEW_DATA } from "../../constants/overview.data";

import {
  // Q1_TL_SUMMARY,
  // Q1_TL_SELF_METRICS,
  // Q1_TL_SELF_CRITERIA,
  // Q1_TL_TEAM_METRICS,
  // Q1_TL_TEAM_CRITERIA,
  // Q1_TL_ELIGIBILITY,
  // Q1_TL_PAYOUT,
  Q1_TL_PAYOUT_NOTE,
  Q1_TL_ROLE,
} from "../../constants/q1OverviewTL.data";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type {
  EligibilityChecklistData,
  RevenueProgressData,
} from "../../types/incentive.types";
import { fetchIncentiveSlabs } from "@/redux/slices";
import {
  buildTLSummary,
  buildTLSelfMetrics,
  buildTLSelfCriteria,
  buildTLTeamMetrics,
  buildTLTeamCriteria,
  buildTLEligibility,
  buildTLPayout,
} from "../../constants/q2OverviewTL.data";

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

const OverviewQ1 = ({ period, employeeType }: any) => {
  const isTeamRole = employeeType
    ? TEAM_ROLE_TYPES.includes(employeeType)
    : false;

  const { employeeIncentive, incentiveSlabs } = useAppSelector(
    (state) => state.incentivePeriod,
  );
  const employeeData = employeeIncentive?.data;
  const dispatch = useAppDispatch();

  const q1Slabs = incentiveSlabs?.data?.map((slab: any, index: any) => ({
    id: String(index + 1),

    range:
      slab.toMultiple === 999
        ? `${slab.fromMultiple}x & above`
        : `${slab.fromMultiple}x – ${slab.toMultiple}x`,

    text: `Broking ${slab.brokingPercentage}% · Non-broking ${slab.nonBrokingPercentage}%`,

    disabled: slab.toMultiple === 999,
  }));

  const q1RevenueProgress: RevenueProgressData = {
    ...Q1_REVENUE_PROGRESS,

    multiplier:
      employeeData?.revenueMultiple != null
        ? `${employeeData.revenueMultiple}x`
        : Q1_REVENUE_PROGRESS.multiplier,

    mpc:
      employeeData?.reqRevenueMultiple != null
        ? `${employeeData.reqRevenueMultiple}x`
        : Q1_REVENUE_PROGRESS.mpc,

    barMax: employeeData?.reqRevenueMultiple ?? Q1_REVENUE_PROGRESS.barMax,

    progressPercent:
      employeeData?.revenueMultiple != null && employeeData?.reqRevenueMultiple
        ? Math.min(
            (employeeData.revenueMultiple / employeeData.reqRevenueMultiple) *
              100,
            100,
          )
        : Q1_REVENUE_PROGRESS.progressPercent,

    target: {
      label:
        employeeData?.reqRevenueMultiple != null
          ? `${employeeData.reqRevenueMultiple}x CTC`
          : Q1_REVENUE_PROGRESS.target.label,

      value:
        employeeData?.empQuarterCTC != null &&
        employeeData?.reqRevenueMultiple != null
          ? `₹${(
              employeeData.empQuarterCTC * employeeData.reqRevenueMultiple
            ).toLocaleString("en-IN")}`
          : Q1_REVENUE_PROGRESS.target.value,
    },

    broking: {
      ...Q1_REVENUE_PROGRESS.broking,

      label: `Broking credit (${employeeData?.brokingPercent}%)`,

      amount:
        employeeData?.brokingCredits != null
          ? `₹${employeeData.brokingCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          : Q1_REVENUE_PROGRESS.broking.amount,

      percent:
        employeeData?.brokingPercent != null
          ? `${(
              (employeeData.brokingCredits / employeeData?.empCTC) *
              100
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}%`
          : Q1_REVENUE_PROGRESS.broking.percent,
    },

    nonBroking: {
      ...Q1_REVENUE_PROGRESS.nonBroking,

      label: `Non-Broking credit (${employeeData?.nonBrokingPercent}%)`,

      amount:
        employeeData?.nonBrokingCredits != null
          ? `₹${employeeData.nonBrokingCredits.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          : Q1_REVENUE_PROGRESS.nonBroking.amount,

      percent:
        employeeData?.nonBrokingPercent != null
          ? `${(
              (employeeData.nonBrokingCredits / employeeData?.empCTC) *
              100
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}%`
          : Q1_REVENUE_PROGRESS.nonBroking.percent,
    },

    netCredit: {
      ...Q1_REVENUE_PROGRESS.netCredit,

      label: "Net credit",

      amount:
        employeeData?.brokingCredits != null &&
        employeeData?.nonBrokingCredits != null
          ? `₹${(
              employeeData.brokingCredits + employeeData.nonBrokingCredits
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          : Q1_REVENUE_PROGRESS.netCredit.amount,

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
          : Q1_REVENUE_PROGRESS.netCredit.percent,
    },

    slabLabel:
      employeeData?.revenueMultiple != null &&
      employeeData?.reqRevenueMultiple != null
        ? employeeData.revenueMultiple >= employeeData.reqRevenueMultiple
          ? "Eligible"
          : "Below minimum"
        : Q1_REVENUE_PROGRESS.slabLabel,

    slabs: q1Slabs && q1Slabs.length > 0 ? q1Slabs : Q1_REVENUE_PROGRESS.slabs,
  };

  const q1Metrics = Q1_METRICS.map((metric) => {
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

  const q1Eligibility: EligibilityChecklistData = {
    ...Q1_ELIGIBILITY,
    qualifications: [
      {
        title: "Min Revenue",
        actual:
          employeeData?.totalRevenue != null
            ? `${employeeData.revenueMultiple}x (₹${employeeData.totalRevenue.toLocaleString("en-IN")})`
            : Q1_ELIGIBILITY.qualifications[0].actual,
        required: Q1_ELIGIBILITY.qualifications[0].required,
        status:
          employeeData?.revenueMultiple != null
            ? employeeData.revenueMultiple >= 3
              ? "completed"
              : "failed"
            : Q1_ELIGIBILITY.qualifications[0].status,
      },
      {
        title: "Non-broking revenue",
        actual:
          employeeData != null
            ? `${employeeData.nonBrokRevMultiple}x`
            : Q1_ELIGIBILITY.qualifications[1].actual,
        required: Q1_ELIGIBILITY.qualifications[1].required,
        status:
          employeeData?.nonBrokRevMultiple != null
            ? employeeData.nonBrokRevMultiple >= 1
              ? "completed"
              : "failed"
            : Q1_ELIGIBILITY.qualifications[1].status,
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

  useEffect(() => {
    if (!employeeData?.empCode || isTeamRole) return;

    dispatch(
      fetchIncentiveSlabs({
        empCode: "0238",
        financialYear: "2026-27",
      }),
    );
  }, [dispatch, employeeData?.empCode, isTeamRole]);

  useEffect(() => {
    console.log("employeeTypeCheck", period, employeeType, employeeData);
  }, [period, employeeType, employeeData]);

  if (isTeamRole) {
    const q1TLSummary = buildTLSummary(employeeData);
    const q1TLSelfMetrics = buildTLSelfMetrics(employeeData);
    const q1TLSelfCriteria = buildTLSelfCriteria(employeeData);
    const q1TLTeamMetrics = buildTLTeamMetrics(employeeData);
    const q1TLTeamCriteria = buildTLTeamCriteria(employeeData);
    const q1TLEligibility = buildTLEligibility(employeeData);
    const q1TLPayout = buildTLPayout(employeeData);

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <MetricGrid metrics={q1TLSummary} period={"q1"} />

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q1TLSelfCriteria.title}
            actual={q1TLSelfCriteria.actual}
            required={q1TLSelfCriteria.required}
          />
          <MetricGrid metrics={q1TLSelfMetrics} />
        </Box>

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q1TLTeamCriteria.title}
            actual={q1TLTeamCriteria.actual}
            required={q1TLTeamCriteria.required}
          />
          <MetricGrid metrics={q1TLTeamMetrics} />
        </Box>

        <TeamEligibilityChecklist data={q1TLEligibility} />
        <PayoutBreakdown data={q1TLPayout} />
        <InfoNote text={Q1_TL_PAYOUT_NOTE} />
        <TeamRoleCard data={Q1_TL_ROLE} />
      </Box>
    );
  }

  // default: RM / BDM / Dealer
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <MetricGrid metrics={q1Metrics} period={"q1"} />
      <RevenueProgress data={q1RevenueProgress} />
      <EligibilityChecklist data={q1Eligibility} />

      <PayoutBreakdown
        data={{
          ...Q1_PAYOUT,
          rows: [
            {
              component: "Team broking incentive",
              basis:
                employeeData?.teamBrokingCredits != null
                  ? `₹${employeeData.teamBrokingCredits.toLocaleString("en-IN")}`
                  : "₹0",
              rate:
                employeeData?.brokIncPercent != null
                  ? `${employeeData.brokIncPercent}%`
                  : "0%",
              amount:
                employeeData?.brokingIncentive != null
                  ? `₹${employeeData.brokingIncentive.toLocaleString("en-IN")}`
                  : "₹0",
            },
            {
              component: "Team Non-broking incentive",
              basis:
                employeeData?.teamNonBrokingCredits != null
                  ? `₹${employeeData.teamNonBrokingCredits.toLocaleString("en-IN")}`
                  : "₹0",
              rate:
                employeeData?.nonBrokIncPercent != null
                  ? `${employeeData.nonBrokIncPercent}%`
                  : "0%",
              amount:
                employeeData?.nonBrokingIncentive != null
                  ? `₹${employeeData.nonBrokingIncentive.toLocaleString("en-IN")}`
                  : "₹0",
            },
            {
              component: "Additional incentive — self accounts",
              basis:
                employeeData?.eligibleAccounts != null
                  ? `${employeeData.eligibleAccounts} accounts`
                  : "0 accounts",
              rate:
                employeeData?.selfNewAccountRate != null
                  ? `₹${employeeData.selfNewAccountRate}/account`
                  : "₹0/account",
              amount:
                employeeData?.newAccountsIncentive != null
                  ? `₹${employeeData.newAccountsIncentive.toLocaleString("en-IN")}`
                  : "₹0",
            },
            {
              component: "Additional incentive — team accounts",
              basis:
                employeeData?.teamEligibleNewAccounts != null
                  ? `${employeeData.teamEligibleNewAccounts} accounts`
                  : "0 accounts",
              rate:
                employeeData?.teamNewAccountRate != null
                  ? `₹${employeeData.teamNewAccountRate}/account`
                  : "₹0/account",
              amount:
                employeeData?.teamNewAccBonus != null
                  ? `₹${employeeData.teamNewAccBonus.toLocaleString("en-IN")}`
                  : "₹0",
            },
            {
              component: "Total Incentive",
              basis: "",
              rate: "",
              amount:
                employeeData?.finalIncentive != null
                  ? `₹${employeeData.finalIncentive.toLocaleString("en-IN")}`
                  : "₹0",
              amountColor: "#5F7F38",
              highlight: true,
            },
          ],
        }}
      />
      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ1;
