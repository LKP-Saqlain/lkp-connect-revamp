import { Box, Typography } from "@mui/material";

import { revenueChartStyles as styles } from "./revenueChart.styles";

interface LegendItem {
  label: string;
  color: string;
}

interface Props {
  items: LegendItem[];
}

const ChartLegend = ({ items }: Props) => {
  return (
    <Box sx={styles.legend}>
      {items.map((item) => (
        <Box key={item.label} sx={styles.legendItem}>
          <Box
            sx={{
              ...styles.legendDot,
              bgcolor: item.color,
            }}
          />

          <Typography sx={styles.legendText}>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChartLegend;
