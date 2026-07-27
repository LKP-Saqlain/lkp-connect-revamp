export const zoneOverviewData = {
  zoneName: "West Zone",

  title: "West Zone — Annual Target Overview",

  subtitle:
    "8 RMs across 3 Branches · Retail Direct Channel · Assigned FY 2026–27",

  metrics: [
    {
      title: "BROKING TARGET",
      value: "₹1.72Cr",
      subtitle: "81.1% of total",
      color: "#185FA5",
    },

    {
      title: "BROKING ACHIEVED",
      value: "₹0",
      subtitle: "0% done",
      color: "#185FA5",
    },

    {
      title: "NON-BKG TARGET",
      value: "₹40.00L",
      subtitle: "18.9% of total",
      color: "#16A34A",
    },

    {
      title: "NON-BKG ACHIEVED",
      value: "₹0",
      subtitle: "0% done",
      color: "#16A34A",
    },

    {
      title: "OVERALL % DONE",
      value: "0%",
      subtitle: "₹0 of ₹2.12Cr",
      color: "#EA580C",
      background: "#FFF8F3",
    },
  ],

  progress: {
    broking: {
      label: "Broking Progress",
      percentage: 0,
      color: "#185FA5",
      target: "₹1.72Cr",
      achieved: "₹0",
    },

    nonBroking: {
      label: "Non-Broking Progress",
      percentage: 0,
      color: "#16A34A",
      target: "₹40.00L",
      achieved: "₹0",
    },

    overall: {
      label: "Overall Zone Progress",
      percentage: 0,
      achieved: "₹0",
      target: "₹2,12,00,000",
      color: "#EA580C",
    },
  },
};

export const revenueCards = [
  {
    id: "broking",
    title: "Broking Revenue",
    value: "₹21,50,000",
    subtitle: "81.1% of total target",
    color: "#185FA5",
  },
  {
    id: "non-broking",
    title: "Non-Broking Revenue",
    value: "₹5,00,000",
    subtitle: "18.9% of total target",
    color: "#16a34a",
  },
  {
    id: "total",
    title: "Total Target",
    value: "₹26,50,000",
    subtitle: "Full Year · All Products",
    color: "#ea580c",
    background: "#FFF9F5",
  },
];

export const progressData = [
  {
    id: "overall",
    label: "Overall Progress",
    percentage: 0,
    achieved: "₹0 achieved",
    startValue: "₹6,07,000",
    endValue: "₹26,50,000",
    color: "#185FA5",
  },
  {
    id: "broking",
    label: "Broking",
    percentage: 0,
    achieved: "₹0",
    target: "₹21,50,000",
    color: "#185FA5",
  },
  {
    id: "non-broking",
    label: "Non-Broking",
    percentage: 0,
    achieved: "₹0",
    target: "₹5,00,000",
    color: "#16a34a",
  },
];
