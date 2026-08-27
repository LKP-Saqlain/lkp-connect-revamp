import type {
  MetricCardData,
  DeferredIncentiveData,
} from "../types/incentive.types";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import PercentageIcon from "@/assets/images/percentage.svg";

export const SELF_PERFORMANCE_METRICS: MetricCardData[] = [
  {
    id: "self-broking",
    title: "Broking Revenue Credit",
    value: "₹5,16,000",
    subtitle: "30% of ₹17,20,000",
    icon: TrendingUp,
  },
  {
    id: "self-non-broking",
    title: "Non Broking Revenue Credit",
    value: "₹6,72,700",
    subtitle: "70% of ₹9,61,000",
    icon: BankImg,
  },
  {
    id: "self-total",
    title: "Total revenue credit",
    value: "₹11,88,700",
    icon: PercentageIcon,
  },
];

export const TEAM_PERFORMANCE_METRICS: MetricCardData[] = [
  {
    id: "team-broking",
    title: "Broking Revenue Credit",
    value: "₹49,62,600",
    subtitle: "30% of ₹1,65,42,000",
    icon: TrendingUp,
  },
  {
    id: "team-non-broking",
    title: "Non Broking Revenue Credit",
    value: "₹64,66,600",
    subtitle: "70% of ₹92,38,000",
    icon: BankImg,
  },
  {
    id: "team-total",
    title: "Total revenue credit",
    value: "₹1,14,29,200",
    icon: PercentageIcon,
  },
];

export const SELF_PERFORMANCE_CRITERIA = {
  title: "My performance (self book)",
  actual: "1.4x",
  required: "1.0x of total CTC",
};

export const TEAM_PERFORMANCE_CRITERIA = {
  title: "Team performance (excl. self · 6 members)",
  actual: "4.1x",
  required: "3.0x of total CTC",
};

export const OVERVIEW_TL_DEFERRED: DeferredIncentiveData = {
  title: "Quarterly deferred incentive (20%)",
  info: "20% of each quarter's incentive is deferred and becomes payable only once the annual MPC of 3x team CTC is met.",
  rows: [
    {
      id: "q1",
      period: "Q1 · Apr–Jun",
      amount: "₹93,516",
      status: "Due · pending annual MPC",
      statusColor: "#3B6D11",
    },
    {
      id: "q2",
      period: "Q2 · Jul–Sep",
      amount: "₹0",
      status: "Not eligible this quarter",
      statusColor: "#A32D2D",
    },
    {
      id: "q3",
      period: "Q3 · Oct–Dec",
      amount: "₹0",
      status: "Not eligible this quarter",
      statusColor: "#A32D2D",
    },
    {
      id: "q4",
      period: "Q4 · Jan–Mar",
      amount: "₹97,060",
      status: "Due · pending annual MPC",
      statusColor: "#3B6D11",
    },
  ],
  total: {
    label: "Total deferred incentive",
    amount: "₹1,90,576",
    color: "#12B76A",
  },
};
