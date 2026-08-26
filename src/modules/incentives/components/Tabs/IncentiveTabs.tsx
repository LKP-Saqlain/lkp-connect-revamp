import Box from "@mui/material/Box";
import TabItem from "./TabItem";
import { tabsStyles } from "./tabs.styles";

import type { TabItem as TabData } from "@/modules/incentives/types/incentive.types";

interface IncentiveTabsProps {
  items: TabData[];
  actionItems?: TabData[];
  value: string;
  actionValue?: string;
  onChange: (tab: string) => void;
  onActionChange?: (tab: string) => void;
}

const IncentiveTabs = ({
  items,
  actionItems = [],
  value,
  actionValue,
  onChange,
  onActionChange,
}: IncentiveTabsProps) => {
  return (
    <Box sx={tabsStyles.root}>
      {/* Left tabs */}
      <Box sx={tabsStyles.leftTabs}>
        {items.map((tab) => (
          <TabItem
            key={tab.id}
            item={tab}
            active={tab.id === value}
            onClick={onChange}
          />
        ))}
      </Box>

      {/* Right tabs */}
      {actionItems.length > 0 && (
        <Box sx={tabsStyles.rightTabs}>
          {actionItems.map((tab) => (
            <TabItem
              key={tab.id}
              item={tab}
              active={tab.id === actionValue}
              onClick={onActionChange ?? (() => {})}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default IncentiveTabs;
