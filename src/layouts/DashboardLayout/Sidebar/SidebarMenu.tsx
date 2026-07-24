import { Box } from "@mui/material";

import { sidebarMenu } from "./sidebar.data";
import SidebarSection from "./SidebarSection";

import type { SidebarMenuItem } from "@/types/layout";

const SidebarMenu = () => {
  /**
   * Group menu items by section
   */

  const groupedMenu = sidebarMenu.reduce<Record<string, SidebarMenuItem[]>>(
    (acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = [];
      }

      acc[item.section].push(item);

      return acc;
    },
    {},
  );

  return (
    <Box>
      {Object.entries(groupedMenu).map(([section, items]) => (
        <SidebarSection key={section} title={section} items={items} />
      ))}
    </Box>
  );
};

export default SidebarMenu;
