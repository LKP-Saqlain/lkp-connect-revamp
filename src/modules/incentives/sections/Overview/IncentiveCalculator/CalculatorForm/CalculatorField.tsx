import { Box, Typography } from "@mui/material";

import { calculatorStyles as styles } from "./calculator.styles";

interface Props {
  label: string;
  value: string | number;
}

const CalculatorField = ({ label, value }: Props) => {
  return (
    <Box sx={styles.fieldRow}>
      <Typography sx={styles.fieldLabel}>{label}</Typography>

      <Box sx={styles.inputBox}>
        <Typography sx={styles.inputValue}>{value}</Typography>
      </Box>
    </Box>
  );
};

export default CalculatorField;
