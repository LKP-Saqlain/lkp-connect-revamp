import { Box, Typography } from "@mui/material";
import { policyMetricStyles as styles } from "./policyMetric.styles";

interface Props {
  title: string;
  value: string;
  helper: string;
  color: string;
}

const PolicyMetricCard = ({ title, value, helper, color }: Props) => {
  return (
    <Box sx={styles.card}>
      <Box
        sx={{
          ...styles.leftBorder,
          bgcolor: color,
        }}
      />

      <Box>
        <Typography sx={styles.title}>{title}</Typography>

        <Typography sx={styles.value}>{value}</Typography>
      </Box>

      <Typography sx={styles.helper}>{helper}</Typography>
    </Box>
  );
};

export default PolicyMetricCard;
