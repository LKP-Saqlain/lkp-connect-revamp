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

export const FY_CLIENT_ACQUISITION: ClientAcquisitionData = {
  summary: [
    {
      id: "clients",
      title: "New clients acquired (FY)",
      value: "10",
      subtitle: "",
      color: "",
    },

    {
      id: "broking",
      title: "Broking revenue",
      value: "₹53,000",
      subtitle: "",
      color: "#2F80ED",
    },

    {
      id: "nonBroking",
      title: "Non-broking revenue",
      value: "₹64,500",
      subtitle: "",
      color: "#27AE60",
    },
  ],

  clients: [
    {
      id: 1,
      client: "Rohan Kapoor",
      clientCode: "LKP32132",
      accountOpening: "12-Apr-2026",

      brokingRevenue: "₹8,000",
      nonBrokingRevenue: "₹15,000",
      totalRevenue: "₹23,000",

      expanded: true,

      details: {
        broking: {
          total: "₹8,000",
          items: [
            { id: 1, name: "Equity", value: "₹1,991" },
            { id: 2, name: "Futures", value: "₹636" },
            { id: 3, name: "Options", value: "₹497" },
            { id: 4, name: "Comm Fut", value: "₹1,054" },
            { id: 5, name: "Comm Opt", value: "₹814" },
            { id: 6, name: "Curr Fut", value: "₹896" },
            { id: 7, name: "Curr Opt", value: "₹954" },
            { id: 8, name: "SLBM", value: "₹835" },
            { id: 9, name: "MTF", value: "₹323" },
          ],
        },

        nonBroking: {
          total: "₹15,000",
          items: [
            { id: 1, name: "Research Advisory – LKP", value: "₹1,994" },
            { id: 2, name: "Research Advisory – Third Party", value: "₹2,682" },
            { id: 3, name: "Mutual Funds", value: "₹4,205" },
            { id: 4, name: "Insurance", value: "₹4,679" },
            { id: 5, name: "Fixed Income", value: "₹1,440" },
          ],
        },

        credits: {
          brokingCredit: "₹2,400",
          nonBrokingCredit: "₹10,500",
          netCredit: "₹12,900",
        },
      },
    },

    {
      id: 2,
      client: "Sneha Iyer",
      clientCode: "LKP10792",
      accountOpening: "28-Apr-2026",
      brokingRevenue: "₹5,000",
      nonBrokingRevenue: "₹9,000",
      totalRevenue: "₹14,000",
      expanded: false,
      details: DEFAULT_DETAILS,
    },

    {
      id: 3,
      client: "Arjun Mehta",
      clientCode: "LKP20783",
      accountOpening: "15-May-2026",
      brokingRevenue: "₹12,000",
      nonBrokingRevenue: "₹6,000",
      totalRevenue: "₹18,000",
      expanded: false,
      details: DEFAULT_DETAILS,
    },

    {
      id: 4,
      client: "Divya Rao",
      clientCode: "LKP90607",
      accountOpening: "02-Jun-2026",
      brokingRevenue: "₹3,000",
      nonBrokingRevenue: "₹4,000",
      totalRevenue: "₹7,000",
      expanded: false,
      details: DEFAULT_DETAILS,
    },

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

    {
      id: 7,
      client: "Farhan Sheikh",
      clientCode: "LKP39116",
      accountOpening: "30-Sep-2026",
      brokingRevenue: "₹6,000",
      nonBrokingRevenue: "₹5,000",
      totalRevenue: "₹11,000",
      expanded: false,
      details: DEFAULT_DETAILS,
    },

    {
      id: 8,
      client: "Ritika Chawla",
      clientCode: "LKP39892",
      accountOpening: "14-Nov-2026",
      brokingRevenue: "₹4,000",
      nonBrokingRevenue: "₹7,000",
      totalRevenue: "₹11,000",
      expanded: false,
      details: DEFAULT_DETAILS,
    },

    {
      id: 9,
      client: "Manoj Pillai",
      clientCode: "LKP30192",
      accountOpening: "22-Dec-2026",
      brokingRevenue: "₹2,500",
      nonBrokingRevenue: "₹2,000",
      totalRevenue: "₹4,500",
      expanded: false,
      details: DEFAULT_DETAILS,
    },

    {
      id: 10,
      client: "Shalini Menon",
      clientCode: "LKP41541",
      accountOpening: "19-Feb-2027",
      brokingRevenue: "₹1,500",
      nonBrokingRevenue: "₹2,500",
      totalRevenue: "₹4,000",
      expanded: false,
      details: DEFAULT_DETAILS,
    },
  ],
};
