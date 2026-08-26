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
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type {
  EligibilityChecklistData,
  EmployeeIncentiveData,
  RevenueProgressData,
} from "../../types/incentive.types";
import { useEffect } from "react";
import { fetchIncentiveSlabs } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

export interface EmployeeIncentiveResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  data: EmployeeIncentiveData;
  message: string;
}

const OverviewQ2 = () => {
  const dispatch = useAppDispatch();

  const { employeeIncentive, incentiveSlabs } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  const employeeData = employeeIncentive?.data;
  console.log("tes11111t", employeeData);

  useEffect(() => {
    if (!employeeData?.empCode) return;

    dispatch(
      fetchIncentiveSlabs({
        empCode: "5434",
        financialYear: "2026-27",
      }),
    );
  }, [dispatch, employeeData?.empCode]);

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

    // Revenue multiple
    multiplier:
      employeeData?.revenueMultiple != null
        ? `${employeeData.revenueMultiple}x`
        : Q2_REVENUE_PROGRESS.multiplier,

    // MPC / required revenue multiple
    mpc:
      employeeData?.reqRevenueMultiple != null
        ? `${employeeData.reqRevenueMultiple}x`
        : Q2_REVENUE_PROGRESS.mpc,

    // Progress bar
    barMax: employeeData?.reqRevenueMultiple ?? Q2_REVENUE_PROGRESS.barMax,

    progressPercent:
      employeeData?.revenueMultiple != null && employeeData?.reqRevenueMultiple
        ? Math.min(
            (employeeData.revenueMultiple / employeeData.reqRevenueMultiple) *
              100,
            100,
          )
        : Q2_REVENUE_PROGRESS.progressPercent,

    // Target
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

    // Broking credit
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

    // Non-broking credit
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

    // Net credit
    netCredit: {
      ...Q2_REVENUE_PROGRESS.netCredit,

      label: "Net credit",

      // Broking amount + Non-broking amount
      amount:
        employeeData?.brokingCredits != null &&
        employeeData?.nonBrokingCredits != null
          ? `₹${(
              employeeData.brokingCredits + employeeData.nonBrokingCredits
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          : Q2_REVENUE_PROGRESS.netCredit.amount,

      // Broking percentage + Non-broking percentage
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

    // Slab label
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
          employeeData != null
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
      // {
      //   label: "₹100 brokerage",
      //   required: `${employeeData?.requiredAccounts ?? 0} accounts`,
      //   actual: `${employeeData?.actualBrokCount ?? 0} accounts`,
      //   eligible: employeeData?.brokStatus ?? false,
      // },
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
