import { Box, Typography } from "@mui/material";

import { slabReferenceStyles as styles } from "./slabReference.styles";

interface Props {
  slab: string;
  broking: string;
  nonBroking: string;
}

const MAX_PERCENT = 15;

const getWidth = (value: string) =>
  `${(Number.parseInt(value.replace("%", "")) / MAX_PERCENT) * 100}%`;

const SlabRow = ({ slab, broking, nonBroking }: Props) => {
  return (
    <Box sx={styles.row}>
      <Typography sx={styles.cell}>{slab}</Typography>

      {/* Broking */}
      <Box sx={styles.track}>
        <Box
          sx={{
            ...styles.fillBlue,
            width: getWidth(broking),
          }}
        >
          <Typography sx={styles.percent}>{broking}</Typography>
        </Box>
      </Box>

      {/* Non Broking */}
      <Box sx={styles.track}>
        <Box
          sx={{
            ...styles.fillGreen,
            width: getWidth(nonBroking),
          }}
        >
          <Typography sx={styles.percent}>{nonBroking}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SlabRow;
