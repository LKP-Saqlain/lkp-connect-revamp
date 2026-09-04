import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";

import { carryForwardTLStyles as styles } from "./carryForward.styles";

interface Props {
  title: string;
  description: string;
  q4Minimum: string;
  q3Shortfall: string;
  required: string;
}

const CarryForwardBannerTL = ({
  title,
  description,
  q4Minimum,
  q3Shortfall,
  required,
}: Props) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.headerRow}>
        <CallMadeOutlinedIcon sx={{ fontSize: 16, color: "#9A6700" }} />
        <Typography sx={styles.title}>{title}</Typography>
      </Box>

      <Typography sx={styles.description}>{description}</Typography>

      <Box sx={styles.boxRow}>
        <Box sx={styles.box}>
          <Typography sx={styles.boxLabel}>Q4 minimum</Typography>
          <Typography sx={styles.boxValue}>{q4Minimum}</Typography>
        </Box>

        <Box sx={styles.box}>
          <Typography sx={styles.boxLabel}>Q3 shortfall</Typography>
          <Typography sx={[styles.boxValue, styles.boxValuePositive]}>
            +{q3Shortfall}
          </Typography>
        </Box>

        <Box sx={[styles.box, styles.boxHighlight]}>
          <Typography sx={styles.boxLabel}>Required</Typography>
          <Typography sx={styles.boxValue}>{required}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CarryForwardBannerTL;
