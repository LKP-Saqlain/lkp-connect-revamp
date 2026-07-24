import Box from "@mui/material/Box";

import TabItem from "./TabItem";
import { tabsStyles } from "./tabs.styles";

import { INCENTIVE_TABS } from "@/modules/incentives/constants/tab.data";
import type { IncentiveTab } from "@/modules/incentives/types/incentive.types";

interface IncentiveTabsProps {
  value: IncentiveTab;
  onChange: (tab: IncentiveTab) => void;
}

const IncentiveTabs = ({ value, onChange }: IncentiveTabsProps) => {
  return (
    <Box sx={tabsStyles.root}>
      {INCENTIVE_TABS.map((tab) => (
        <TabItem
          key={tab.id}
          item={tab}
          active={tab.id === value}
          onClick={onChange}
        />
      ))}
    </Box>
  );
};

export default IncentiveTabs;
