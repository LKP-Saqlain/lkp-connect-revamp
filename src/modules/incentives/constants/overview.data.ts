import type { OverviewData } from "../types/incentive.types";
import type { MetricCardData } from "../types/incentive.types";
import PercentageIcon from "@/assets/images/percentage.svg";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";

export const OVERVIEW_DATA: OverviewData = {
  metrics: [
    {
      id: "revenue-multiple",
      title: "Revenue multiple",
      value: "6.3x",
      icon: PercentageIcon,
    },

    {
      id: "broking-credit",
      title: "Broking Revenue Credit",
      value: "₹22,48,500",
      subtitle: "30% of ₹74,95,000",
      caption: "3.7x CTC",
      icon: TrendingUp,
    },

    {
      id: "non-broking-credit",
      title: "Non-Broking Revenue Credit",
      value: "₹15,01,500",
      subtitle: "70% of ₹21,45,000",
      caption: "2.5x CTC",
      icon: BankImg,
    },
  ],

  progress: {
    multiplier: "6.3x",

    mpc: "3x",

    barMax: 3,

    target: {
      label: "3x CTC",
      value: "₹18,00,000",
    },

    broking: {
      label: "Broking credit (30%)",
      amount: "₹22,48,500",
      percent: "125%",
    },

    nonBroking: {
      label: "Non-broking credit (70%)",
      amount: "₹15,01,500",
      percent: "83%",
    },

    netCredit: {
      label: "Net credit",
      amount: "₹37,50,000",
      percent: "208%",
    },
  },

  deferred: {
    title: "Quarterly deferred incentive (20%)",

    info: "20% of each quarter's incentive is deferred and becomes payable only once the annual MPC of 3x CTC is met.",

    rows: [
      {
        id: "q1",
        period: "Q1 · Apr–Jun",
        amount: "₹53,020",
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
        amount: "₹53,800",
        status: "Due · pending annual MPC",
        statusColor: "#3B6D11",
      },

      {
        id: "q4",
        period: "Q4 · Jan–Mar",
        amount: "₹45,800",
        status: "Due · pending annual MPC",
        statusColor: "#3B6D11",
      },
    ],
  },

  policy: {
    title: "Relationship Manager",

    description:
      "Revenue credit: Broking 30% · Non-Broking 70% · Min 3x CTC to qualify · NISM Series VII required",

    icon: "person",
  },
};

export const FY_METRICS: MetricCardData[] = [
  {
    id: "revenue-multiple",
    title: "Revenue Multiple",
    value: "4.26",
  },
  {
    id: "broking-credit",
    title: "Broking Revenue Credit",
    value: "₹6,34,870",
    meta: "30% of ₹74,95,000 · 3.7x CTC",
  },
  {
    id: "non-broking-credit",
    title: "Non Broking Revenue Credit",
    value: "₹1,12,450",
    meta: "15% of ₹7,49,650",
  },
];
