import { Box, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import { payoutStyles as styles } from "./payout.styles";

interface Props {
  data: {
    title: string;
    items: string[];
  };
}

const PayoutSection = ({ data }: Props) => {
  return (
    <Box sx={styles.section}>
      <Box sx={styles.header}>
        <Box sx={styles.iconWrapper}>
          <CalendarTodayOutlinedIcon sx={styles.blueIcon} />
        </Box>

        <Typography sx={styles.title}>{data.title}</Typography>
      </Box>

      <Box sx={styles.bullets}>
        {data.items.map((item) => (
          <Box key={item} sx={styles.bulletRow}>
            <Box sx={styles.bullet} />

            <Typography sx={styles.text}>{item}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PayoutSection;
