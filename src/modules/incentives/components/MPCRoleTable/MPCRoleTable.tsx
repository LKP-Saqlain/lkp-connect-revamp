import { Box, Typography } from "@mui/material";

import { mpcStyles as styles } from "./mpc.styles";
import MPCRoleRow from "./MPCRoleRow";

interface Row {
  role: string;
  mpc: string;
  deferred: string;
  cap: string;
}

interface Props {
  data: {
    title: string;
    rows: Row[];
  };
}

const MPCRoleTable = ({ data }: Props) => {
  return (
    <Box>
      {/* Table Header */}
      <Box sx={styles.tableHeader}>
        <Typography sx={styles.headerCell}>Role</Typography>

        <Typography sx={styles.headerCell}>MPC</Typography>

        <Typography sx={styles.headerCell}>Deferred</Typography>

        <Typography sx={styles.headerCell}>Incentive Cap</Typography>
      </Box>

      {/* Table Body */}
      <Box>
        {data.rows.map((row) => (
          <MPCRoleRow
            key={row.role}
            role={row.role}
            mpc={row.mpc}
            deferred={row.deferred}
            cap={row.cap}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MPCRoleTable;
