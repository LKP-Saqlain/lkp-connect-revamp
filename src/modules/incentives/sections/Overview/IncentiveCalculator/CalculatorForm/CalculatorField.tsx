import { Box, Typography, MenuItem, Select } from "@mui/material";
import { calculatorStyles as styles } from "./calculator.styles";
import type { CalcFieldConfig } from "@/modules/incentives/constants/incentiveCalculatorFields";

interface Props {
  field: CalcFieldConfig;
  value: string;
  onChange: (id: string, value: string) => void;
}

const CalculatorField = ({ field, value, onChange }: Props) => {
  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // allow only digits (strip anything else the user pastes/types)
    const cleaned = raw.replace(/[^0-9]/g, "");
    onChange(field.id, cleaned);
  };

  return (
    <Box sx={styles.fieldRow}>
      <Typography sx={styles.fieldLabel}>{field.label}</Typography>

      {field.type === "select" ? (
        <Select
          value={value}
          onChange={(e) => onChange(field.id, e.target.value)}
          sx={{
            height: 48,
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {field.options?.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Box sx={styles.inputBox}>
          <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={handleNumericChange}
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontSize: "14px",
              fontWeight: 500,
              color: "#101828",
              fontFamily: "inherit",
              background: "transparent",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default CalculatorField;
