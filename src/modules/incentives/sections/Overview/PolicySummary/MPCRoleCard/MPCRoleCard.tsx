import { Box, Divider, Typography } from "@mui/material";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import MPCRoleTable from "@/modules/incentives/components/MPCRoleTable";

import { MPC_ROLE_TABLE } from "@/modules/incentives/constants/policyTabs.data";

import { mpcRoleCardStyles as styles } from "./mpcRoleCard.styles";

const MPCRoleCard = () => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Box sx={styles.iconWrapper}>
          <GroupsOutlinedIcon sx={styles.icon} />
        </Box>

        <Typography sx={styles.title}>MPC Threshold by Role</Typography>
      </Box>

      <Divider sx={styles.divider} />

      <Box sx={styles.tableWrapper}>
        <MPCRoleTable data={MPC_ROLE_TABLE} />
      </Box>
    </Box>
  );
};

export default MPCRoleCard;
