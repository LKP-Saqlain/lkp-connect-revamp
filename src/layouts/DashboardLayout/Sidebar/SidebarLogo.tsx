import { Box } from "@mui/material";

import { sidebarStyles } from "./sidebar.styles";

import Logo from "@/assets/images/logo.png";

const SidebarLogo = () => {
  return (
    <Box sx={sidebarStyles.logoContainer}>
      {/* Replace with actual logo */}

      <Box component="img" src={Logo} sx={sidebarStyles.logo} />
    </Box>
  );
};

export default SidebarLogo;
