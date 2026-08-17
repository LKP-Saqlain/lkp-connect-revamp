import { Box, Typography } from "@mui/material";
import { revenueBreakdownStyles as styles } from "./revenueBreakdown.styles";

interface Props {
  label: string;
  value: string;
}

const RevenueRow = ({ label, value }: Props) => {
  return (
    <Box sx={styles.row}>
      <Typography sx={styles.rowLabel}>{label}</Typography>
      <Typography sx={styles.rowValue}>{value}</Typography>
    </Box>
  );
};

export default RevenueRow;
