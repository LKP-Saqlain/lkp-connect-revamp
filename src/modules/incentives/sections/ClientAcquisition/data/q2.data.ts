import type { ClientAcquisitionData } from "../types/clientAcquisition.types";
const DEFAULT_DETAILS = {
  broking: {
    total: "₹0",
    items: [
      { id: 1, name: "Equity", value: "₹0" },
      { id: 2, name: "Futures", value: "₹0" },
      { id: 3, name: "Options", value: "₹0" },
      { id: 4, name: "Comm Fut", value: "₹0" },
      { id: 5, name: "Comm Opt", value: "₹0" },
      { id: 6, name: "Curr Fut", value: "₹0" },
      { id: 7, name: "Curr Opt", value: "₹0" },
      { id: 8, name: "SLBM", value: "₹0" },
      { id: 9, name: "MTF", value: "₹0" },
    ],
  },

  nonBroking: {
    total: "₹0",
    items: [
      { id: 1, name: "Research Advisory – LKP", value: "₹0" },
      { id: 2, name: "Research Advisory – Third Party", value: "₹0" },
      { id: 3, name: "Mutual Funds", value: "₹0" },
      { id: 4, name: "Insurance", value: "₹0" },
      { id: 5, name: "Fixed Income", value: "₹0" },
    ],
  },

  credits: {
    brokingCredit: "₹0",
    nonBrokingCredit: "₹0",
    netCredit: "₹0",
  },
};
export const Q2_CLIENT_ACQUISITION: ClientAcquisitionData = {
  summary: [
    {
      id: "clients",
      title: "New clients acquired (Q2)",
      value: "2",
      subtitle: "",
      color: "",
    },
    {
      id: "broking",
      title: "Broking revenue",
      value: "₹11,000",
      subtitle: "",
      color: "#2F80ED",
    },
    {
      id: "nonBroking",
      title: "Non-broking revenue",
      value: "₹19,000",
      subtitle: "",
      color: "#27AE60",
    },
  ],

  clients: [
    {
      id: 5,
      client: "Karan Malhotra",
      clientCode: "LKP50853",
      accountOpening: "19-Jul-2026",
      brokingRevenue: "₹9,000",
      nonBrokingRevenue: "₹11,000",
      totalRevenue: "₹20,000",
      expanded: false,
      details: DEFAULT_DETAILS,
    },

    {
      id: 6,
      client: "Ananya Bose",
      clientCode: "LKP19425",
      accountOpening: "08-Aug-2026",
      brokingRevenue: "₹2,000",
      nonBrokingRevenue: "₹3,000",
      totalRevenue: "₹5,000",
      expanded: false,
      details: DEFAULT_DETAILS,
    },
  ],
};
