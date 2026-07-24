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
  onClick: (period: IncentivePeriod) => void;
}

const PeriodChip = ({ item, active, onClick }: PeriodChipProps) => {
  return (
    <Box
      sx={{
        ...periodStyles.chip,
        ...(active ? periodStyles.activeChip : {}),
      }}
      onClick={() => onClick(item.id)}
    >
      <Typography sx={periodStyles.chipText}>{item.label}</Typography>

      {item.notification && <Box sx={periodStyles.notificationDot} />}
    </Box>
  );
};

export default PeriodChip;
