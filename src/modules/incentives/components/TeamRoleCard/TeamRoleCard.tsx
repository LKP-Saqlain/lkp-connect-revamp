import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import type { TeamRoleData } from "../../types/incentive.types";

interface TeamRoleCardProps {
  data: TeamRoleData;
}

const TeamRoleCard = ({ data }: TeamRoleCardProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: 1.2,
      background: "#FFFFFF",
      border: "1px solid #E4E7EC",
      borderLeft: "4px solid #185FA5",
      borderRadius: "12px",
      p: 2,
    }}
  >
    <GroupsOutlinedIcon sx={{ fontSize: 20, color: "#185FA5", mt: "2px" }} />

    <Box>
      <Typography
        sx={{ fontSize: 13, fontWeight: 700, color: "#111111", mb: 0.3 }}
      >
        {data.title}
      </Typography>
      <Typography sx={{ fontSize: 12.5, lineHeight: 1.6, color: "#667085" }}>
        {data.description}
      </Typography>
    </Box>
  </Box>
);

export default TeamRoleCard;
