import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { deferredStyles as styles } from "./deferred.styles";

import type { DeferredIncentiveRow } from "../../types/incentive.types";

interface DeferredRowProps {
  row: DeferredIncentiveRow;
  centerAmount?: boolean;
}

const DeferredRow = ({ row, centerAmount = false }: DeferredRowProps) => {
  return (
    <Box sx={centerAmount ? styles.rowCentered : styles.row}>
      <Box>
        <Typography sx={styles.period}>{row.period}</Typography>
      </Box>

      <Typography
        sx={{
          ...styles.amount,
          ...(centerAmount && { textAlign: "center" }),
        }}
      >
        {row.amount}
      </Typography>

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
