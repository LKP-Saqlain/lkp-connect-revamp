import { Box, Typography } from "@mui/material";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import RevenueColumn from "./RevenueColumn";
import type { RevenueBreakdownData } from "../../types/revenueBreakdown.types";
import { revenueBreakdownStyles as styles } from "./revenueBreakdown.styles";

interface Props {
  table: RevenueBreakdownData["table"];
}

const RevenueBreakdownCard = ({ table }: Props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <TimelineOutlinedIcon
          sx={{
            color: "#185FA5",
            fontSize: 20,
          }}
        />

        <Typography sx={styles.title}>Revenue breakdown</Typography>
      </Box>
      <Box sx={styles.body}>
        <RevenueColumn section={table.broking} />

        <RevenueColumn section={table.nonBroking} />
      </Box>
    </Box>
  );
};

export default RevenueBreakdownCard;
