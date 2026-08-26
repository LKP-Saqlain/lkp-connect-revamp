import type { RevenueBreakdownData } from "../types/revenueBreakdown.types";

export const Q1_REVENUE_BREAKDOWN: RevenueBreakdownData = {
  summary: [
    {
      id: "totalRevenue",
      title: "Total revenue",
      value: "₹96,40,000",
      subtitle: "Across 17 products",
      color: "#101828",
    },
    {
      id: "broking",
      title: "Broking revenue",
      value: "₹74,95,000",
      subtitle: "78% of total",
      color: "#2F80ED",
    },
    {
      id: "nonBroking",
      title: "Non-broking revenue",
      value: "₹21,45,000",
      subtitle: "22% of total",
      color: "#27AE60",
    },
    {
      id: "topProduct",
      title: "Top product",
      value: "Options",
      subtitle: "₹11,24,212 • Broking",
      color: "#101828",
    },
  ],

  table: {
    broking: {
      title: "Broking",
      total: "₹24,95,000",
      color: "#2F80ED",
      items: [
        {
          id: 1,
          name: "Equity",
          value: "₹8,12,183",
        },
        {
          id: 2,
          name: "Futures",
          value: "₹9,77,296",
        },
        {
          id: 3,
          name: "Options",
          value: "₹11,24,212",
        },
        {
          id: 4,
          name: "Comm Fut",
          value: "₹9,04,341",
        },
        {
          id: 5,
          name: "Comm Opt",
          value: "₹6,01,097",
        },
        {
          id: 6,
          name: "Curr Fut",
          value: "₹6,22,657",
        },
        {
          id: 7,
          name: "Curr Opt",
          value: "₹9,75,063",
        },
        {
          id: 8,
          name: "SLBM",
          value: "₹5,45,208",
        },
        {
          id: 9,
          name: "MTF",
          value: "₹9,32,943",
        },
      ],
    },

    nonBroking: {
      title: "Non-broking",
      total: "₹7,15,000",
      color: "#27AE60",
      items: [
        {
          id: 1,
          name: "Research Advisory - LKP",
          value: "₹2,44,918",
        },
        {
          id: 2,
          name: "Research Advisory - Third Party",
          value: "₹3,22,644",
        },
        {
          id: 3,
          name: "Mutual Funds",
          value: "₹4,28,197",
        },
        {
          id: 4,
          name: "Insurance",
          value: "₹5,02,673",
        },
        {
          id: 5,
          name: "Fixed Income",
          value: "₹6,46,568",
        },
      ],
    },
  },

  chart: {
    categories: ["Apr", "May", "Jun"],

    series: [
      {
        name: "Broking",
        data: [18, 22, 17],
      },
      {
        name: "Non-broking",
        data: [8, 10, 7],
      },
    ],
  },
};
