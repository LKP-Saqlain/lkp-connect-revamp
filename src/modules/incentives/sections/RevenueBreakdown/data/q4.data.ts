import type { RevenueBreakdownData } from "../types/revenueBreakdown.types";

export const Q4_REVENUE_BREAKDOWN: RevenueBreakdownData = {
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
    // {
    //   id: "topProduct",
    //   title: "Top product",
    //   value: "Options",
    //   subtitle: "₹11,24,212 • Broking",
    //   color: "#101828",
    // },
  ],

  table: {
    broking: {
      title: "Broking",
      total: "₹14,95,000",
      color: "#2F80ED",
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

    nonBroking: {
      title: "Non-broking",
      total: "₹2,15,000",
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
    categories: ["Jan", "Feb", "Mar"],

    series: [
      {
        name: "Broking",
        data: [24, 21, 26],
      },

      {
        name: "Non-broking",
        data: [12, 9, 11],
      },
    ],
  },
};
