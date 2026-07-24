import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { iconMapper } from "./iconMapper";

import type { UserProfileProps } from "@/types/layout";

const UserProfile = ({ user }: UserProfileProps) => {
  const ExpandIcon = iconMapper.expand;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        cursor: "pointer",
      }}
    >
      <Avatar
        src={user.avatar}
        sx={{
          width: 40,
          height: 40,
        }}
      >
        {user.initials}
      </Avatar>

      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
          {user.name}
        </Typography>

        <Typography
          sx={{ fontWeight: 400, fontSize: "09px" }}
          color="text.secondary"
        >
          {user.designation}
        </Typography>
      </Box>

      <IconButton size="small">
        <ExpandIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default UserProfile;
