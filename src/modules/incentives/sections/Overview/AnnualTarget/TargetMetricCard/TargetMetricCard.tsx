import { Box, Chip, Typography } from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";

import ProgressBar from "./ProgressBar";
import { targetMetricStyles as styles } from "./targetMetric.styles";

interface Props {
  title: string;

  target: string;

  achieved: string;

  progress: number;

  color: string;
}

const TargetMetricCard = ({
  title,
  target,
  achieved,
  progress,
  color,
}: Props) => {
  return (
    <Box sx={styles.card}>
      {/* Header */}
      <Box sx={styles.titleRow}>
        <CircleIcon
          sx={{
            ...styles.icon,
            color,
          }}
        />

        <Typography sx={styles.title}>{title}</Typography>
      </Box>

      {/* Target */}
      <Box sx={styles.infoRow}>
        <Typography sx={styles.label}>Target (FY)</Typography>

        <Typography sx={styles.targetValue}>{target}</Typography>
      </Box>

      {/* Achieved */}
      <Box sx={styles.infoRow}>
        <Typography sx={styles.label}>Actual achieved</Typography>

        <Typography
          sx={{
            ...styles.achievedValue,
            color,
          }}
        >
          {achieved}
        </Typography>
      </Box>

      {/* Progress */}
      <Box sx={styles.progressWrapper}>
        <ProgressBar value={progress} color={color} />
      </Box>

      {/* Percentage */}
      <Box sx={styles.percentageContainer}>
        <Chip label={`${progress}% of target`} sx={styles.percentageChip} />
      </Box>
    </Box>
  );
};

export default TargetMetricCard;
