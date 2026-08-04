import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { SLAB_REFERENCE } from "@/modules/incentives/constants/incentiveCalculator.data";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { slabReferenceStyles as styles } from "./slabReference.styles";

import SlabRow from "./SlabRow";

const SlabReference = () => {
  return (
    <Box sx={styles.card}>
      <Typography sx={styles.title}>{SLAB_REFERENCE.title}</Typography>

      <Box sx={styles.legend}>
        {SLAB_REFERENCE.legend.map((item) => (
          <Box key={item.label} sx={styles.legendItem}>
            <CircleIcon
              sx={{
                color: item.color,
                fontSize: 12,
              }}
            />

            <Typography sx={styles.legendText}>{item.label}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={styles.table}>
        {SLAB_REFERENCE.rows.map((row) => (
          <SlabRow
            key={row.slab}
            slab={row.slab}
            broking={row.broking}
            nonBroking={row.nonBroking}
          />
        ))}
      </Box>

      <Box sx={styles.infoBox}>
        <InfoOutlinedIcon
          sx={{
            fontSize: 18,
            color: "#185FA5",
            mt: "2px",
            flexShrink: 0,
          }}
        />

        <Typography sx={styles.infoText}>{SLAB_REFERENCE.info}</Typography>
      </Box>
    </Box>
  );
};

export default SlabReference;
