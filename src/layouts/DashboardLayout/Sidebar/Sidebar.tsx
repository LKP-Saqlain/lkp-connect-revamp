import { Box } from "@mui/material";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
// import SidebarFooter from "./SidebarFooter";
import { sidebarStyles } from "./sidebar.styles";
import type { SidebarProps } from "@/types";
import { useEffect } from "react";

const Sidebar = ({ collapsed }: SidebarProps) => {
  useEffect(() => {
    console.log(collapsed);
  }, [collapsed]);

  return (
    <Box sx={sidebarStyles.root}>
      <SidebarLogo />

      <Box sx={sidebarStyles.menuContainer}>
        <SidebarMenu />
      </Box>

      {/* <Box sx={sidebarStyles.footer}>
        <SidebarFooter />
      </Box> */}
    </Box>
  );
};

export default Sidebar;
