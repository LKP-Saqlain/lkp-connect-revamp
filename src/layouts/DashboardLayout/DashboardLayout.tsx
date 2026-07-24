import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

import { layoutStyles } from "./layout.styles";

const DashboardLayout = () => {
  return (
    <Box sx={layoutStyles.root}>
      <Sidebar collapsed={false} />

      <Box sx={layoutStyles.main}>
        <Header />

        <Box sx={layoutStyles.content}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
