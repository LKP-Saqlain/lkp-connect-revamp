import { Box, Divider, Typography, Chip } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

import { mpcRoleCardStyles as styles } from "./mpcRoleCard.styles";
import {
  formatMPCThreshold,
  getRoleLabel,
} from "@/modules/incentives/constants/policyTabs.data";
import { useAppSelector } from "@/redux/hooks";

interface Props {
  employeeType: string;
}

const MPCRoleCard = ({ employeeType }: Props) => {
  const { salesSummary } = useAppSelector((state) => state.incentivePeriod);

  const mpc = salesSummary?.data?.mpcResponse;
  console.log("TestMPC", mpc?.criteriaValue);

  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Box sx={styles.iconWrapper}>
          <GridViewOutlinedIcon sx={styles.icon} />
        </Box>
        <Typography sx={styles.title}>MPC by role</Typography>
      </Box>

      <Divider sx={styles.divider} />

      <Box sx={{ px: 3, py: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Typography sx={{ fontSize: 12, color: "#667085", fontWeight: 500 }}>
            Role
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#667085", fontWeight: 500 }}>
            MPC
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#EAF3FD",
            borderRadius: "8px",
            px: 1.5,
            py: 1.2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{ fontSize: 13.5, fontWeight: 600, color: "#185FA5" }}
            >
              {getRoleLabel(employeeType)}
            </Typography>
            <Chip
              label="You"
              size="small"
              sx={{
                height: 20,
                fontSize: 10,
                fontWeight: 600,
                backgroundColor: "#185FA5",
                color: "#FFFFFF",
              }}
            />
          </Box>

          <Typography sx={{ fontSize: 13, color: "#667085" }}>
            {` ${formatMPCThreshold(mpc?.criteriaValue)} / quarter`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MPCRoleCard;
