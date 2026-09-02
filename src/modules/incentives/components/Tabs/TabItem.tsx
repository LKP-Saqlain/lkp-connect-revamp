import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { tabsStyles } from "./tabs.styles";

import type { TabItem as TabData } from "@/modules/incentives/types/incentive.types";

interface TabItemProps {
  item: TabData;
  active: boolean;
  onClick: (tab: string) => void;
}

const TabItem = ({ item, active, onClick }: TabItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {item.hasSeparator && (
        <Box
          sx={{
            width: "1px",
            height: 20,
            backgroundColor: "#E4E7EC",
            mr: 4, // matches the gap between tabs (gap: 4 in leftTabs)
            flexShrink: 0,
          }}
        />
      )}

      <Box
        sx={[tabsStyles.tab, active && tabsStyles.activeTab]}
        onClick={() => onClick(item.id)}
      >
        <Typography sx={tabsStyles.tabText}>{item.label}</Typography>
      </Box>
    </Box>
  );
};

export default TabItem;
