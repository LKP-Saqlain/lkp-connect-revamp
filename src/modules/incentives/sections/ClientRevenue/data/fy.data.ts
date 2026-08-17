import {
  CLIENT_REVENUE_SUMMARY,
  CLIENT_REVENUE_TABLE,
  BROKING_ITEMS,
  NON_BROKING_ITEMS,
  CLIENT_REVENUE_TOTAL,
} from "../../../constants/clientRevenue.data";

export const FY_CLIENT_REVENUE = {
  summary: CLIENT_REVENUE_SUMMARY,

  rows: CLIENT_REVENUE_TABLE,

  total: {
    ...CLIENT_REVENUE_TOTAL,
    brokingItems: BROKING_ITEMS,
    nonBrokingItems: NON_BROKING_ITEMS,
  },
};
