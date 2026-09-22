import type {
  EmployeeIncentiveData,
  MetricCardData,
  RevenueProgressData,
  EligibilityChecklistData,
  PayoutBreakdownData,
} from "../../types/incentive.types";

import PercentageIcon from "@/assets/images/percentage.svg";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import Coin from "@/assets/images/coin.svg";

const formatAmount = (value?: number | null) =>
  value != null ? `₹${value.toLocaleString("en-IN")}` : "₹0";

const formatMultiple = (value?: number | null) =>
  value != null ? `${value}x` : "0x";

const formatPercent = (value?: number | null) =>
  value != null ? `${value}%` : "0%";

export const buildQ3Data = (data?: EmployeeIncentiveData | null) => {
  const metrics: MetricCardData[] = [
    {
      id: "revenue-multiple",
      title: "Revenue multiple",
      value: formatMultiple(data?.revenueMultiple),
      subtitle: data?.slabId != null ? `Slab: ${data.slabId}` : undefined,
      icon: PercentageIcon,
    },

    {
      id: "broking-credit",
      title: "Broking Revenue Credit",
      value: formatAmount(data?.brokingCredits),
      subtitle:
        data?.brokingPercent != null && data?.totalBrokingRevenue != null
          ? `${formatPercent(data.brokingPercent)} of ${formatAmount(
              data.totalBrokingRevenue,
            )}`
          : undefined,
      icon: TrendingUp,
    },

    {
      id: "non-broking-credit",
      title: "Non-Broking Revenue Credit",
      value: formatAmount(data?.nonBrokingCredits),
      subtitle:
        data?.nonBrokingPercent != null && data?.totalNonBrokingRevenue != null
          ? `${formatPercent(data.nonBrokingPercent)} of ${formatAmount(
              data.totalNonBrokingRevenue,
            )}`
          : undefined,
      icon: BankImg,
    },

    {
      id: "estimated-incentive",
      title: "Est. incentive",
      value: formatAmount(data?.finalIncentive),
      subtitle: undefined,
      caption: undefined,
      color: "#5F7F38",
      icon: Coin,
    },
  ];

  const revenueProgress: RevenueProgressData = {
    multiplier: formatMultiple(data?.revenueMultiple),

    mpc: formatMultiple(data?.reqRevenueMultiple),

    barMax: data?.reqRevenueMultiple ?? 0,

    progressPercent:
      data?.reqRevenueMultiple && data?.revenueMultiple != null
        ? Math.min((data.revenueMultiple / data.reqRevenueMultiple) * 100, 100)
        : 0,

    target: {
      label:
        data?.reqRevenueMultiple != null
          ? `${data.reqRevenueMultiple}x CTC`
          : "—",

      value:
        data?.empCTC != null && data?.reqRevenueMultiple != null
          ? formatAmount(data.empCTC * data.reqRevenueMultiple)
          : "₹0",
    },

    broking: {
      label: `Broking credit (${data?.brokingPercent ?? 0}%)`,
      amount: formatAmount(data?.brokingCredits),
      percent: "—",
    },

    nonBroking: {
      label: `Non-broking credit (${data?.nonBrokingPercent ?? 0}%)`,
      amount: formatAmount(data?.nonBrokingCredits),
      percent: "—",
    },

    netCredit: {
      label: "Net credit",
      amount: formatAmount(data?.totalRevenue),
      percent: "—",
    },

    slabLabel: "—",
    slabs: [],
  };

  const eligibility: EligibilityChecklistData = {
    title: "Eligibility Checklist",

    banner: {
      type:
        data?.revenueMixStatus && data?.newClientStatus ? "success" : "warning",

      title:
        data?.revenueMixStatus && data?.newClientStatus
          ? "Eligible for incentive"
          : "Not yet eligible",

      description:
        data?.revenueMultiple != null && data?.reqRevenueMultiple != null
          ? `Revenue multiple ${formatMultiple(
              data.revenueMultiple,
            )} against required ${formatMultiple(data.reqRevenueMultiple)}.`
          : "Eligibility information unavailable.",
    },

    currentSlab: "—",

    qualifications: [
      {
        title: "Min Revenue",
        actual: formatMultiple(data?.revenueMultiple),
        required: formatMultiple(data?.reqRevenueMultiple),
        status: data?.revenueMixStatus === true ? "completed" : "pending",
      },
      {
        title: "Non-Broking",
        actual: formatMultiple(data?.nonBrokRevMultiple),
        required: formatMultiple(data?.reqNonBrokRevMultiple),
        status:
          data?.nonBrokRevMultiple != null &&
          data?.reqNonBrokRevMultiple != null &&
          data.nonBrokRevMultiple >= data.reqNonBrokRevMultiple
            ? "completed"
            : "pending",
      },
    ],

    accounts: [
      {
        label: "New accounts",
        required: `${data?.requiredAccounts ?? 0} accounts`,
        actual: `${data?.totalNewAccounts ?? 0} accounts`,
        eligible: data?.newClientStatus === true,
      },
    ],

    requirements: [],
  };

  const payout: PayoutBreakdownData = {
    title: "Payout breakdown",

    rows: [
      {
        component: "Broking incentive",
        basis: formatAmount(data?.brokingCredits),
        rate: data?.brokIncPercent != null ? `${data.brokIncPercent}%` : "0%",
        amount: formatAmount(data?.brokingIncentive),
        amountColor: "#1570EF",
      },

      {
        component: "Non-broking incentive",
        basis: formatAmount(data?.nonBrokingCredits),
        rate:
          data?.nonBrokIncPercent != null ? `${data.nonBrokIncPercent}%` : "0%",
        amount: formatAmount(data?.nonBrokingIncentive),
        amountColor: "#12B76A",
      },

      {
        component: "Acquisition bonus",
        basis: `${data?.eligibleAccounts ?? 0} qualified accounts`,
        rate:
          data?.selfNewAccountRate != null
            ? `₹${data.selfNewAccountRate}/account`
            : "₹0/account",
        amount: formatAmount(data?.newAccountsIncentive),
        amountColor: "#B54708",
      },

      {
        component: "Total incentive",
        basis: "",
        rate: "",
        amount: formatAmount(data?.finalIncentive),
        amountColor: "#5F7F38",
        highlight: true,
      },
    ],
  };

  return {
    metrics,
    revenueProgress,
    eligibility,
    payout,
  };
};
