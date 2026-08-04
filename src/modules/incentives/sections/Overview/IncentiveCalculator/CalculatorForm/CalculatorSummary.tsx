import { Box, Chip, Typography } from "@mui/material";

import { calculatorStyles as styles } from "./calculator.styles";

interface ChipItem {
  id: string;
  label: string;
  bg: string;
  color: string;
}

interface Props {
  multiplier: string;
  slab: string;
  payout: string;
  chips: ChipItem[];
}

const CalculatorSummary = ({ multiplier, slab, payout, chips }: Props) => {
  return (
    <Box sx={styles.summaryCard}>
      <Box sx={styles.summaryGrid}>
        <Box>
          <Typography sx={styles.summaryLabel}>Revenue multiple</Typography>

          <Typography sx={styles.multiplier}>{multiplier}</Typography>
        </Box>

        <Box>
          <Typography sx={styles.summaryLabel}>Incentive slab</Typography>

          <Typography sx={styles.slab}>{slab}</Typography>
        </Box>

        <Box>
          <Typography sx={styles.summaryLabel}>Est. total payout</Typography>

          <Typography sx={styles.payout}>{payout}</Typography>
        </Box>
      </Box>

      <Box sx={styles.chipsContainer}>
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            label={chip.label}
            sx={{
              flex: 1,
              minWidth: 0,
              bgcolor: chip.bg,
              color: chip.color,
              fontWeight: 500,
              fontSize: 10,
              borderRadius: "999px",
              height: 34,
              "& .MuiChip-label": {
                px: 1.5,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "center",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CalculatorSummary;
