export const TARGET_METRICS = [
  {
    id: "broking",
    title: "Broking (Revenue Credit)",

    target: "₹25,86,000",
    achieved: "₹22,48,500",

    progress: 87,

    color: "#2F80ED",
  },

  {
    id: "non-broking",
    title: "Non-broking (Revenue Credit)",

    target: "₹17,27,000",
    achieved: "₹15,01,500",

    progress: 87,

    color: "#21B573",
  },

  {
    id: "total",
    title: "Total (Revenue Credit)",

    target: "₹43,13,000",
    achieved: "₹37,50,000",

    progress: 87,

    color: "#185FA5",
  },
];

export const MONTHLY_REVENUE = [
  {
    month: "Apr",
    broking: 250000,
    nonBroking: 150000,
    total: 400000,
  },
  {
    month: "May",
    broking: 250000,
    nonBroking: 150000,
    total: 400000,
  },
  {
    month: "Jun",
    broking: 250000,
    nonBroking: 150000,
    total: 400000,
  },
  {
    month: "Jul",
    broking: 30000,
    nonBroking: 70000,
    total: 100000,
  },
  {
    month: "Aug",
    broking: 30000,
    nonBroking: 70000,
    total: 100000,
  },
  {
    month: "Sep",
    broking: 30000,
    nonBroking: 70000,
    total: 100000,
  },
  {
    month: "Oct",
    broking: 260000,
    nonBroking: 140000,
    total: 400000,
  },
  {
    month: "Nov",
    broking: 260000,
    nonBroking: 140000,
    total: 400000,
  },
  {
    month: "Dec",
    broking: 260000,
    nonBroking: 140000,
    total: 400000,
  },
  {
    month: "Jan",
    broking: 220000,
    nonBroking: 130000,
    total: 350000,
  },
  {
    month: "Feb",
    broking: 220000,
    nonBroking: 130000,
    total: 350000,
  },
  {
    month: "Mar",
    broking: 220000,
    nonBroking: 130000,
    total: 350000,
  },
];

export const REVENUE_CHART = {
  title: "Month-wise revenue credit",

  legend: [
    {
      label: "Broking",
      color: "#185FA5",
    },
    {
      label: "Non Broking",
      color: "#6A8E3A",
    },
  ],

  months: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ],

  target: [5.5, 6.0, 6.4, 6.8, 7.3, 7.8, 8.2, 8.8, 9.1, 9.6, 10.0, 10.5],

  actual: [4.8, 5.3, 5.9, 6.1, 6.8, 7.0, 7.6, 8.1, 8.5, 9.0, 9.4, 9.8],
};
