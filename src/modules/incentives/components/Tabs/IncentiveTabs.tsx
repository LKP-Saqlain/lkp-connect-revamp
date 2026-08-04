import Box from "@mui/material/Box";

import TabItem from "./TabItem";
import { tabsStyles } from "./tabs.styles";

import type { TabItem as TabData } from "@/modules/incentives/types/incentive.types";

interface IncentiveTabsProps {
  items: TabData[];
  value: string;
  onChange: (tab: string) => void;
}

const IncentiveTabs = ({ items, value, onChange }: IncentiveTabsProps) => {
  return (
    <Box sx={tabsStyles.root}>
      {items.map((tab) => (
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
