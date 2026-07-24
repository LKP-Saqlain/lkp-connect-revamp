import { Box, Typography } from "@mui/material";

import SidebarItem from "./SidebarItem";

import { sidebarStyles } from "./sidebar.styles";

import type { SidebarSectionProps } from "@/types/layout";

const SidebarSection = ({ title, items }: SidebarSectionProps) => {
  return (
    <Box sx={sidebarStyles.section}>
      <Typography sx={sidebarStyles.sectionTitle}>{title}</Typography>

      <Box>
        {items.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default SidebarSection;
