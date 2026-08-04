import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import DeferredRow from "./DeferredRow";
import { deferredStyles as styles } from "./deferred.styles";
import ClockIcon from "@/assets/images/clock.svg";
import type { DeferredIncentiveData } from "../../types/incentive.types";

interface DeferredIncentiveProps {
  data: DeferredIncentiveData;
}

const DeferredIncentive = ({ data }: DeferredIncentiveProps) => {
  return (
    <Box sx={styles.card}>
      <Typography
        sx={{
          ...styles.title,
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Box component="img" src={ClockIcon} alt="progress-icon" />
        {data.title}
      </Typography>
      <Box sx={styles.infoBox}>
        <InfoOutlinedIcon sx={styles.infoIcon} />

        <Typography sx={styles.infoText}>{data.info}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        {data.rows.map((row) => (
          <DeferredRow key={row.id} row={row} />
        ))}
      </Box>
    </Box>
  );
};

export default DeferredIncentive;
