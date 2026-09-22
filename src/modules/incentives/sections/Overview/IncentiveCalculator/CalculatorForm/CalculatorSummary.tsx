import { Box, Chip, Typography } from "@mui/material";
import { calculatorStyles as styles } from "./calculator.styles";
import type { IncentiveCalculatorResult } from "@/modules/incentives/types/incentiveCalculator.types";

interface Props {
  result: IncentiveCalculatorResult | null;
}

const CalculatorSummary = ({ result }: Props) => {
  const multiplier = result ? `${result.revenueMultiple.toFixed(2)}x` : "—";
  const slab = result
    ? `${result.fromMultiple}x–${result.toMultiple}x`
    : "Below min";
  const payout = result ? `₹${result.estPayout.toLocaleString("en-IN")}` : "₹0";

  const chips = result
    ? [
        {
          id: "broking",
          label: `Broking ${result.brokPerc}% → ₹${result.brokingIncentive.toLocaleString("en-IN")}`,
          bg: "#EAF3FD",
          color: "#185FA5",
        },
        {
          id: "non-broking",
          label: `Non-brkng ${result.nonBrokPerc}% → ₹${result.nonBrokingIncentive.toLocaleString("en-IN")}`,
          bg: "#EAF7EE",
          color: "#0F9D58",
        },
        {
          id: "acq-bonus",
          label: `Acq bonus ₹${result.acqBonus.toLocaleString("en-IN")}`,
          bg: "#FFF3D6",
          color: "#9A6700",
        },
      ]
    : [];

  return (
    <Box>
      <Box sx={styles.summaryCard}>
        <Box sx={styles.summaryGrid}>
          <Box sx={styles.summaryItem}>
            <Typography sx={styles.summaryLabel}>Revenue multiple</Typography>
            <Typography sx={styles.multiplier}>{multiplier}</Typography>
          </Box>
          <Box sx={styles.summaryItem}>
            <Typography sx={styles.summaryLabel}>Incentive slab</Typography>
            <Typography sx={styles.slab}>{slab}</Typography>
          </Box>
          <Box sx={styles.summaryItem}>
            <Typography sx={styles.summaryLabel}>Est. total payout</Typography>
            <Typography sx={styles.payout}>{payout}</Typography>
          </Box>
        </Box>
      </Box>

      {chips.length > 0 && (
        <Box sx={styles.chipsContainer}>
          {chips.map((chip) => (
            <Chip
              key={chip.id}
              label={chip.label}
              sx={{
                bgcolor: chip.bg,
                color: chip.color,
                fontWeight: 500,
                fontSize: 12,
                borderRadius: "999px",
                height: 32,
                "& .MuiChip-label": {
                  px: 1.5,
                },
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CalculatorSummary;
