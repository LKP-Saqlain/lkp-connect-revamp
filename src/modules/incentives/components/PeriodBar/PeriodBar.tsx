import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

import PeriodChip from "./PeriodChip";
import { periodStyles } from "./period.styles";

import { PERIODS } from "@/modules/incentives/constants/period.data";
import type { IncentivePeriod } from "@/modules/incentives/types/incentive.types";

interface PeriodBarProps {
  value: IncentivePeriod;
  onChange: (period: IncentivePeriod) => void;
  financialYear?: string;
  showTeamOverview?: boolean;
  teamOverviewActive?: boolean;
  onTeamOverviewClick?: () => void;
}

const PeriodBar = ({
  value,
  onChange,
  financialYear = "FY 2026-27",
  showTeamOverview = false,
  teamOverviewActive = false,
  onTeamOverviewClick,
}: PeriodBarProps) => {
  return (
    <Box sx={periodStyles.root}>
      <Box sx={periodStyles.left}>
        <Typography sx={periodStyles.label}>Period :</Typography>

        <Box sx={periodStyles.chipContainer}>
          {PERIODS.map((period) => (
            <PeriodChip
              key={period.id}
              item={period}
              active={!teamOverviewActive && period.id === value}
              onClick={onChange}
            />
          ))}

          {showTeamOverview && (
            <>
              <Box sx={periodStyles.separator} />

              <Box
                onClick={onTeamOverviewClick}
                sx={[
                  periodStyles.chip,
                  teamOverviewActive && periodStyles.activeChip,
                ]}
              >
                <AutoAwesomeOutlinedIcon
                  sx={{
                    fontSize: 14,
                    color: teamOverviewActive ? "#FFFFFF" : "#344054",
                  }}
                />
                <Typography sx={periodStyles.chipText}>
                  Team Overview
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>

      <Box sx={periodStyles.financialYearContainer}>
        <Typography sx={periodStyles.financialYear}>{financialYear}</Typography>
      </Box>
    </Box>
  );
};

export default PeriodBar;
