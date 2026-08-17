import { Box, Typography } from "@mui/material";

import type { AcquisitionCredit } from "../../types/clientAcquisition.types";

import { acquisitionTableStyles as styles } from "../AcquisitionTable/acquisitionTable.styles";

interface Props {
  credits: AcquisitionCredit;
}

const CreditFooter = ({ credits }: Props) => {
  return (
    <Box sx={styles.creditFooter}>
      <Box sx={styles.creditItem}>
        <Typography sx={styles.creditLabel}>Broking credit (30%):</Typography>

        <Typography
          sx={{
            ...styles.creditValue,
            color: "#2F80ED",
          }}
        >
          {credits.brokingCredit}
        </Typography>
      </Box>

      <Box sx={styles.creditItem}>
        <Typography sx={styles.creditLabel}>
          Non-broking credit (70%):
        </Typography>

        <Typography
          sx={{
            ...styles.creditValue,
            color: "#27AE60",
          }}
        >
          {credits.nonBrokingCredit}
        </Typography>
      </Box>

      <Box sx={styles.creditItem}>
        <Typography sx={styles.creditLabel}>Net credit:</Typography>

        <Typography
          sx={{
            ...styles.creditValue,
            color: "#101828",
          }}
        >
          {credits.netCredit}
        </Typography>
      </Box>
    </Box>
  );
};

export default CreditFooter;
    