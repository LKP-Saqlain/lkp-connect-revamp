import type { TabItem } from "../types/incentive.types";

export const INCENTIVE_TABS: TabItem[] = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "client-revenue",
    label: "Client revenue",
  },
  {
    id: "revenue-breakdown",
    label: "Revenue breakdown",
  },
  {
    id: "client-acquisition",
    label: "Client acquisition",
  },
];

export const INCENTIVE_ACTION_TABS: TabItem[] = [
  {
    id: "sales-policy",
    label: "Sales Policy",
  },
  {
    id: "annual-target",
    label: "Annual Target",
  },
];

export const TEAM_SUMMARY_TAB: TabItem = {
  id: "team-summary",
  label: "Team summary",
  hasSeparator: true,
};

export const NEW_CLIENT_BUSINESS_TAB: TabItem = {
  id: "new-client-business",
  label: "New Client Business",
};

export const getIncentiveTabs = (isFY: boolean): TabItem[] => {
  if (isFY) {
    return INCENTIVE_TABS.map((tab) =>
      tab.id === "client-acquisition" ? NEW_CLIENT_BUSINESS_TAB : tab,
    );
  }
  return INCENTIVE_TABS;
};
