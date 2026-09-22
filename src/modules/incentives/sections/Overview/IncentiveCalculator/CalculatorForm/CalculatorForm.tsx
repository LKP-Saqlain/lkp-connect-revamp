import { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";

import CalculatorField from "./CalculatorField";
import CalculatorSummary from "./CalculatorSummary";
import { calculatorStyles as styles } from "./calculator.styles";

import {
  DEFAULT_FIELDS,
  CAD_FIELDS,
  TL_EXTRA_FIELD,
} from "@/modules/incentives/constants/incentiveCalculatorFields";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchIncentiveCalculatorPreview } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

interface Props {
  employeeType: string; // "RM" | "Dealer" | "BDM" | "TL" | "BM" | "AH" | "CAD"
}

const ROLE_TITLES: Record<string, string> = {
  RM: "Relationship Manager",
  Dealer: "Advisor – Dealing",
  BDM: "Business Development Manager",
  TL: "Team Leader",
  BM: "Branch Manager",
  AH: "Area Head",
  CAD: "CAD / Advisory Desk",
};

const CalculatorForm = ({ employeeType }: Props) => {
  const dispatch = useAppDispatch();
  const { incentiveCalculatorResult, loading } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  const isCAD = employeeType === "CAD";
  const isTL = ["TL", "BM", "AH"].includes(employeeType);

  const fields = isCAD
    ? CAD_FIELDS
    : isTL
      ? [...DEFAULT_FIELDS, TL_EXTRA_FIELD]
      : DEFAULT_FIELDS;

  const [values, setValues] = useState<Record<string, string>>(() =>
    fields.reduce(
      (acc, f) => ({ ...acc, [f.id]: f.type === "select" ? "0" : "" }),
      {},
    ),
  );

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleCalculate = () => {
    dispatch(
      fetchIncentiveCalculatorPreview({
        employeeType,
        ctc: Number(values.ctc) || 0,
        brokRevenue: Number(values.brokRevenue) || 0,
        nonBrokRevenue: Number(values.nonBrokRevenue) || 0,
        newAccounts: Number(values.newAccounts) || 0,
        brokAccounts: Number(values.brokAccounts) || 0,
        boosterEligible: isTL ? Number(values.boosterEligible) || 0 : 0,
      }),
    );
  };

  const result = incentiveCalculatorResult?.data ?? null;

  return (
    <Box sx={styles.card}>
      <Typography sx={styles.title}>
        Incentive calculator — {ROLE_TITLES[employeeType] ?? employeeType}
      </Typography>

      <Box sx={styles.fieldsContainer}>
        {fields.map((field) => (
          <CalculatorField
            key={field.id}
            field={field}
            value={values[field.id]}
            onChange={handleChange}
          />
        ))}
      </Box>

      <Button
        onClick={handleCalculate}
        disabled={loading}
        variant="contained"
        sx={{
          mt: 2,
          mb: 3,
          height: 44,
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: 14,
          backgroundColor: "#185FA5",
          "&:hover": { backgroundColor: "#134876" },
        }}
      >
        {loading ? (
          <CircularProgress size={20} sx={{ color: "#fff" }} />
        ) : (
          "Calculate Incentive"
        )}
      </Button>

      <Divider sx={styles.divider} />

      <CalculatorSummary result={result} />
    </Box>
  );
};

export default CalculatorForm;
