import { Box } from "@mui/material";

import { targetMetricStyles as styles } from "./targetMetric.styles";

interface Props {
  value: number;
  color: string;
}

const ProgressBar = ({ value, color }: Props) => {
  return (
    <Box sx={styles.track}>
      <Box
        sx={{
          ...styles.fill,
          width: `${value}%`,
          bgcolor: color,
        }}
      />
    </Box>
  );
};

export default ProgressBar;
