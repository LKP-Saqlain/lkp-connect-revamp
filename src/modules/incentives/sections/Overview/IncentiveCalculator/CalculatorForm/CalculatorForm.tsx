import { Box, Divider, Typography } from "@mui/material";

import CalculatorField from "./CalculatorField";
import CalculatorSummary from "./CalculatorSummary";

import { calculatorStyles as styles } from "./calculator.styles";

import {
  CALCULATOR_FORM,
  CALCULATOR_SUMMARY,
} from "@/modules/incentives/constants/incentiveCalculator.data";

const CalculatorForm = () => {
  return (
    <Box sx={styles.card}>
      <Typography sx={styles.title}>{CALCULATOR_FORM.title}</Typography>

      <Box sx={styles.fieldsContainer}>
        {CALCULATOR_FORM.fields.map((field) => (
          <CalculatorField
            key={field.id}
            label={field.label}
            value={field.value}
          />
        ))}
      </Box>

      <Divider sx={styles.divider} />

      <CalculatorSummary
        multiplier={CALCULATOR_SUMMARY.multiplier}
        slab={CALCULATOR_SUMMARY.slab}
        payout={CALCULATOR_SUMMARY.payout}
        chips={CALCULATOR_SUMMARY.chips}
      />
    </Box>
  );
};

export default CalculatorForm;
