import type { OverviewData } from "../types/incentive.types";
import type { MetricCardData } from "../types/incentive.types";

export const OVERVIEW_DATA: OverviewData = {
  metrics: [
    {
      id: "revenue-multiple",
      title: "Revenue multiple",
      value: "6.3x",
      icon: "analytics",
    },

    {
      id: "broking-credit",
      title: "Broking Revenue Credit",
      value: "₹22,48,500",
      subtitle: "30% of ₹74,95,000",
      caption: "3.7x CTC",
      icon: "trending_up",
    },

    {
      id: "non-broking-credit",
      title: "Non-Broking Revenue Credit",
      value: "₹15,01,500",
      subtitle: "70% of ₹21,45,000",
      caption: "2.5x CTC",
      icon: "account_balance",
    },
  ],

  progress: {
    revenueMultiple: "6.3x",
    progressValue: 100,

    currentLabel: "MPC 3x",

    targetLabel: "3x CTC",

    targetAmount: "₹18,00,000",

    mpc: "3x",

    legends: [
      {
        id: "broking",
        label: "Broking credit (30%)",
        color: "#2F80ED",
        amount: "₹22,48,500",
        percentage: "125%",
      },

      {
        id: "non-broking",
        label: "Non-broking credit (70%)",
        color: "#27AE60",
        amount: "₹15,01,500",
        percentage: "83%",
      },

      {
        id: "net-credit",
        label: "Net credit",
        color: "#111827",
        amount: "₹37,50,000",
        percentage: "208%",
      },
    ],
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
        statusColor: "#5F7F38",
      },

      {
        id: "q2",
        period: "Q2 · Jul–Sep",
        amount: "₹0",
        status: "Not eligible this quarter",
        statusColor: "#C0392B",
      },

      {
        id: "q3",
        period: "Q3 · Oct–Dec",
        amount: "₹53,800",
        status: "Due · pending annual MPC",
        statusColor: "#5F7F38",
      },

      {
        id: "q4",
        period: "Q4 · Jan–Mar",
        amount: "₹45,800",
        status: "Due · pending annual MPC",
        statusColor: "#5F7F38",
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
