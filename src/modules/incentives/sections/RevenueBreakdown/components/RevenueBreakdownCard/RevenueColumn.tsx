import { Box, Typography } from "@mui/material";
import RevenueRow from "./RevenueRow";
import type { RevenueSection } from "../../types/revenueBreakdown.types";
import { revenueBreakdownStyles as styles } from "./revenueBreakdown.styles";

interface Props {
  section: RevenueSection;
}

const RevenueColumn = ({ section }: Props) => {
  return (
    <Box sx={styles.column}>
      <Box
        sx={{
          ...styles.columnHeader,
          borderBottom: `2px solid ${section.color}`,
        }}
      >
        <Typography
          sx={{
            ...styles.columnTitle,
            color: section.color,
          }}
        >
          {section.title}
        </Typography>
        <Typography
          sx={{
            ...styles.columnValue,
            color: section.color,
          }}
        >
          {section.total}
        </Typography>
      </Box>

      {section.items.map((item) => (
        <RevenueRow key={item.id} label={item.name} value={item.value} />
      ))}
    </Box>
  );
};

export default RevenueColumn;
