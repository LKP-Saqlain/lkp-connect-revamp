import { Avatar, Box, IconButton, Typography } from "@mui/material";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { sidebarStyles } from "./sidebar.styles";

const SidebarFooter = () => {
  return (
    <Box sx={sidebarStyles.footerContainer}>
      <Avatar
        sx={{
          width: 42,
          height: 42,
        }}
      >
        A
      </Avatar>

      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "12px" }} noWrap>
          Amit Sharma
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 400, fontSize: "09px" }}
          noWrap
        >
          Relationship Manager
        </Typography>
      </Box>

      <IconButton>
        <LogoutRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default SidebarFooter;
