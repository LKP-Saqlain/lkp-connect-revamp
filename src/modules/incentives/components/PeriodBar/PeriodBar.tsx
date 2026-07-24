import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PeriodChip from "./PeriodChip";
import { periodStyles } from "./period.styles";

import { PERIODS } from "@/modules/incentives/constants/period.data";
import type { IncentivePeriod } from "@/modules/incentives/types/incentive.types";

interface PeriodBarProps {
  value: IncentivePeriod;
  onChange: (period: IncentivePeriod) => void;
  financialYear?: string;
}

const PeriodBar = ({
  value,
  onChange,
  financialYear = "FY 2026-27",
}: PeriodBarProps) => {
  return (
    <Box sx={periodStyles.root}>
      <Box sx={periodStyles.left}>
        <Typography sx={periodStyles.label}>Period : </Typography>

        <Box sx={periodStyles.chipContainer}>
          {PERIODS.map((period) => (
            <PeriodChip
              key={period.id}
              item={period}
              active={period.id === value}
              onClick={onChange}
            />
          ))}
        </Box>
      </Box>

      <Box sx={periodStyles.financialYearContainer}>
        <Typography sx={periodStyles.financialYear}>{financialYear}</Typography>
      </Box>
    </Box>
  );
};

export default PeriodBar;
