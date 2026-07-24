import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { tabsStyles } from "./tabs.styles";

import type {
  IncentiveTab,
  TabItem as IncentiveTabItem,
} from "@/modules/incentives/types/incentive.types";

interface TabItemProps {
  item: IncentiveTabItem;
  active: boolean;
  onClick: (tab: IncentiveTab) => void;
}

const TabItem = ({ item, active, onClick }: TabItemProps) => {
  return (
    <Box
      sx={[tabsStyles.tab, active && tabsStyles.activeTab]}
      onClick={() => onClick(item.id)}
    >
      <Typography sx={tabsStyles.tabText}>{item.label}</Typography>
    </Box>
  );
};

export default TabItem;
