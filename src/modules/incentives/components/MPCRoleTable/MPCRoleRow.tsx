import { Box, Typography } from "@mui/material";

import { mpcStyles as styles } from "./mpc.styles";

interface Props {
  role: string;
  mpc: string;
  deferred: string;
  cap: string;
}

const MPCRoleRow = ({ role, mpc, deferred, cap }: Props) => {
  return (
    <Box sx={styles.row}>
      <Typography sx={styles.role}>{role}</Typography>

      <Typography sx={styles.value}>{mpc}</Typography>

      <Typography sx={styles.secondaryValue}>{deferred}</Typography>

      <Typography sx={styles.secondaryValue}>{cap}</Typography>
    </Box>
  );
};

export default MPCRoleRow;
