import {
  CLIENT_REVENUE_SUMMARY,
  CLIENT_REVENUE_TABLE,
  BROKING_ITEMS,
  NON_BROKING_ITEMS,
  CLIENT_REVENUE_TOTAL,
} from "../../../constants/clientRevenue.data";

export const Q2_CLIENT_REVENUE = {
  summary: CLIENT_REVENUE_SUMMARY,
  rows: CLIENT_REVENUE_TABLE.map((item, index) => ({
    ...item,

    percentage: [
      "28.6%",
      "21.4%",
      "13.2%",
      "10.4%",
      "8.1%",
      "6.2%",
      "5.1%",
      "3.6%",
      "2.3%",
      "1.1%",
    ][index],

    isCap: index === 0 || index === 1,
  })),

  total: {
    ...CLIENT_REVENUE_TOTAL,
    brokingItems: BROKING_ITEMS,
    nonBrokingItems: NON_BROKING_ITEMS,
  },
};
