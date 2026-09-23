import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { periodStyles } from "./period.styles";

import type {
  IncentivePeriod,
  PeriodItem,
} from "@/modules/incentives/types/incentive.types";

interface PeriodChipProps {
  item: PeriodItem;
  active: boolean;
  disabled?: boolean;
  showNotification?: boolean;
  onClick: (period: IncentivePeriod) => void;
}

const PeriodChip = ({
  item,
  active,
  onClick,
  disabled = false,
  showNotification = false,
}: PeriodChipProps) => {
  return (
    <Box
      sx={[
        periodStyles.chip,
        active && periodStyles.activeChip,
        disabled && periodStyles.disabledChip,
      ]}
      onClick={() => {
        if (!disabled) {
          onClick(item.id);
        }
      }}
    >
      <Typography sx={periodStyles.chipText}>{item.label}</Typography>

      {showNotification && <Box sx={periodStyles.notificationDot} />}
    </Box>
  );
};

export default PeriodChip;
