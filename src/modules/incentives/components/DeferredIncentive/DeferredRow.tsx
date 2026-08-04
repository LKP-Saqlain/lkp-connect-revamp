import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { deferredStyles as styles } from "./deferred.styles";

import type { DeferredIncentiveRow } from "../../types/incentive.types";

interface DeferredRowProps {
  row: DeferredIncentiveRow;
}

const DeferredRow = ({ row }: DeferredRowProps) => {
  return (
    <Box sx={styles.row}>
      <Box>
        <Typography sx={styles.period}>{row.period}</Typography>
      </Box>

      <Typography sx={styles.amount}>{row.amount}</Typography>

      <Typography
        sx={{
          ...styles.status,
          color: row.statusColor,
        }}
      >
        {row.status}
      </Typography>
    </Box>
  );
};

export default DeferredRow;
