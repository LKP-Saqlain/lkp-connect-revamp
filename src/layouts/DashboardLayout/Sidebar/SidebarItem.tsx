import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import { iconMapper } from "./iconMapper";
import { sidebarStyles } from "./sidebar.styles";

import type { SidebarItemProps } from "@/types/layout";

const SidebarItem = ({ item }: SidebarItemProps) => {
  const Icon = iconMapper[item.icon];

  return (
    <NavLink
      to={item.path}
      style={{
        textDecoration: "none",
      }}
    >
      {({ isActive }) => (
        <Box
          sx={{
            ...sidebarStyles.menuItem,
            ...(isActive ? sidebarStyles.activeMenu : {}),
          }}
        >
          <Icon fontSize="small" sx={sidebarStyles.menuIcon} />

          <Typography sx={sidebarStyles.menuText}>{item.title}</Typography>
        </Box>
      )}
    </NavLink>
  );
};

export default SidebarItem;
