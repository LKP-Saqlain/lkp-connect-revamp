export const CLIENT_REVENUE_SUMMARY = [
  {
    id: "total",
    title: "Total revenue",
    value: "₹96,40,000",
    subtitle: "Credit: ₹37,50,000",
    color: "#101828",
  },
  {
    id: "broking",
    title: "Broking Revenue Credit",
    value: "₹22,48,500",
    subtitle: "30% of ₹74,95,000",
    color: "#2F80ED",
  },
  {
    id: "non-broking",
    title: "Non-Broking Revenue Credit",
    value: "₹15,01,500",
    subtitle: "70% of ₹21,45,000",
    color: "#27AE60",
  },
];

export const CLIENT_REVENUE_TABLE = [
  {
    id: 1,
    client: "Rajesh Mehta",
    clientCode: "LKP29804",

    broking: "₹20,16,900",
    brokingCredit: "₹6,05,070",

    nonBroking: "₹6,05,800",
    nonBrokingCredit: "₹4,24,060",

    totalRevenue: "₹26,22,700",
    totalCredit: "₹10,29,130",

    expanded: true,
  },

  {
    id: 2,
    client: "Priya Sharma",
    clientCode: "LKP31841",

    broking: "₹15,80,800",
    brokingCredit: "₹4,74,240",

    nonBroking: "₹7,28,700",
    nonBrokingCredit: "₹5,10,090",

    totalRevenue: "₹23,09,500",
    totalCredit: "₹9,84,330",

    expanded: false,
  },

  {
    id: 3,
    client: "Anil Kumar",
    clientCode: "LKP10404",

    broking: "₹11,02,500",
    brokingCredit: "₹3,30,750",

    nonBroking: "₹2,10,200",
    nonBrokingCredit: "₹1,47,140",

    totalRevenue: "₹13,12,700",
    totalCredit: "₹4,77,890",

    expanded: false,
  },

  {
    id: 4,
    client: "Sunita Patel",
    clientCode: "LKP32714",

    broking: "₹8,64,700",
    brokingCredit: "₹2,59,410",

    nonBroking: "₹3,22,700",
    nonBrokingCredit: "₹2,25,890",

    totalRevenue: "₹11,87,400",
    totalCredit: "₹4,85,300",

    expanded: false,
  },

  {
    id: 5,
    client: "Vikram Singh",
    clientCode: "LKP32035",

    broking: "₹6,98,100",
    brokingCredit: "₹2,09,430",

    nonBroking: "₹89,100",
    nonBrokingCredit: "₹62,370",

    totalRevenue: "₹7,87,200",
    totalCredit: "₹2,71,800",

    expanded: false,
  },

  {
    id: 6,
    client: "Meena Joshi",
    clientCode: "LKP19619",

    broking: "₹5,05,200",
    brokingCredit: "₹1,51,560",

    nonBroking: "₹68,600",
    nonBrokingCredit: "₹48,020",

    totalRevenue: "₹5,73,800",
    totalCredit: "₹1,99,580",

    expanded: false,
  },

  {
    id: 7,
    client: "Deepak Verma",
    clientCode: "LKP29125",

    broking: "₹3,91,300",
    brokingCredit: "₹1,17,390",

    nonBroking: "₹53,300",
    nonBrokingCredit: "₹37,310",

    totalRevenue: "₹4,44,600",
    totalCredit: "₹1,54,700",

    expanded: false,
  },

  {
    id: 8,
    client: "Kavita Nair",
    clientCode: "LKP20298",

    broking: "₹2,00,400",
    brokingCredit: "₹60,120",

    nonBroking: "₹40,100",
    nonBrokingCredit: "₹28,070",

    totalRevenue: "₹2,40,500",
    totalCredit: "₹88,190",

    expanded: false,
  },

  {
    id: 9,
    client: "Suresh Iyer",
    clientCode: "LKP24275",

    broking: "₹98,100",
    brokingCredit: "₹29,430",

    nonBroking: "₹16,700",
    nonBrokingCredit: "₹11,690",

    totalRevenue: "₹1,14,800",
    totalCredit: "₹41,120",

    expanded: false,
  },

  {
    id: 10,
    client: "Pooja Gupta",
    clientCode: "LKP21850",

    broking: "₹37,000",
    brokingCredit: "₹11,100",

    nonBroking: "₹9,800",
    nonBrokingCredit: "₹6,860",

    totalRevenue: "₹46,800",
    totalCredit: "₹17,960",

    expanded: false,
  },
];

export const BROKING_ITEMS = [
  { label: "Equity", value: "₹1,77,399" },
  { label: "Futures", value: "₹3,39,888" },
  { label: "Options", value: "₹3,93,406" },
  { label: "Comm Fut", value: "₹2,80,829" },
  { label: "Comm Opt", value: "₹84,817" },
  { label: "Curr Fut", value: "₹62,837" },
  { label: "Curr Opt", value: "₹4,17,102" },
  { label: "SLBM", value: "₹86,903" },
  { label: "MTF", value: "₹1,73,719" },
];

export const NON_BROKING_ITEMS = [
  { label: "Research Advisory - LKP", value: "₹23,444" },
  { label: "Research Advisory - Third Party", value: "₹1,38,816" },
  { label: "Mutual Funds", value: "₹1,19,981" },
  { label: "Insurance", value: "₹1,66,860" },
  { label: "Fixed Income", value: "₹1,56,699" },
];

export const CLIENT_REVENUE_TOTAL = {
  brokingRevenue: "₹74,95,000",
  brokingCredit: "₹22,48,500",

  nonBrokingRevenue: "₹21,45,000",
  nonBrokingCredit: "₹15,01,500",

  totalRevenue: "₹96,40,000",
  totalCredit: "₹37,50,000",

  totalClients: 10,
};
