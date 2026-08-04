import { Box, Typography } from "@mui/material";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import { carryForwardStyles as styles } from "./carryForward.styles";
import SummaryCard from "./SummaryCard";

interface Props {
  title: string;
  description: string;

  summary: {
    title: string;
    value: string;
    danger?: boolean;
  }[];
}

const CarryForwardBanner = ({ title, description, summary }: Props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Box sx={styles.iconWrapper}>
          <AutorenewOutlinedIcon sx={styles.icon} />
        </Box>

        <Box sx={styles.content}>
          <Typography sx={styles.title}>{title}</Typography>

          <Typography sx={styles.description}>{description}</Typography>

          <Box sx={styles.summaryGrid}>
            {summary.map((item) => (
              <SummaryCard
                key={item.title}
                title={item.title}
                value={item.value}
                danger={item.danger}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarryForwardBanner;
