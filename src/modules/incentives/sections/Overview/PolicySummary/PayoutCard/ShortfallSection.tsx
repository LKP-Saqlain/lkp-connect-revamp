import { Box, Typography } from "@mui/material";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import { payoutStyles as styles } from "./payout.styles";

interface Props {
  data: {
    title: string;
    items: string[];
  };
}

const ShortfallSection = ({ data }: Props) => {
  return (
    <Box sx={styles.section}>
      <Box sx={styles.header}>
        <Box
          sx={{
            ...styles.iconWrapper,
            ...styles.orangeWrapper,
          }}
        >
          <AutorenewOutlinedIcon sx={styles.orangeIcon} />
        </Box>

        <Typography sx={styles.title}>{data.title}</Typography>
      </Box>

      <Box sx={styles.bullets}>
        {data.items.map((item) => (
          <Box key={item} sx={styles.bulletRow}>
            <Box
              sx={{
                ...styles.bullet,
                ...styles.orangeBullet,
              }}
            />

            <Typography sx={styles.text}>{item}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShortfallSection;
