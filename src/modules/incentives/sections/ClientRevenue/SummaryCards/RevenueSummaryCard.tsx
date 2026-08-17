import { Box, Typography } from "@mui/material";

import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";

import { summaryCardStyles as styles } from "./summaryCard.styles";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

const RevenueSummaryCard = ({ title, value, subtitle, color }: Props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.titleRow}>
        <RadioButtonCheckedOutlinedIcon
          sx={{
            ...styles.icon,
            color,
          }}
        />

        <Typography sx={styles.title}>{title}</Typography>
      </Box>

      <Typography
        sx={{
          ...styles.value,
          color,
        }}
      >
        {value}
      </Typography>

      <Typography sx={styles.subtitle}>{subtitle}</Typography>
    </Box>
  );
};

export default RevenueSummaryCard;
